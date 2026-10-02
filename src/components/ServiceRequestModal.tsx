import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({
  isOpen,
  onClose,
  preselectedService = 'Drain & Rooter',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService,
    address: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.phone.trim() || formData.phone.length < 7) {
      newErrors.phone = 'Valid phone required';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'Address required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#102330]/75 backdrop-blur-sm animate-fade-in"
    >
      {/* Minimal Redesigned Modal Card Container */}
      <div className="relative w-full max-w-md bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-[#102330]/10 overflow-hidden">
        {/* Minimal Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[#E9F0EE]">
          <div>
            <span className="text-[10px] font-mono tracking-[0.2em] text-[#65C8C4] uppercase block">
              Arcadia, CA
            </span>
            <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-[#102330]">
              Request Service
            </h3>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close"
            className="p-1.5 rounded-lg text-[#102330]/40 hover:text-[#102330] hover:bg-[#F8FAF8] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#E9F0EE] text-[#65C8C4] flex items-center justify-center mx-auto mb-2">
              <Check className="w-5 h-5 stroke-[2.5]" />
            </div>

            <h4 className="font-heading text-lg font-bold uppercase text-[#102330]">
              Request Received
            </h4>

            <p className="text-xs text-[#172027]/70 font-mono">
              We will contact {formData.phone} shortly.
            </p>

            <div className="pt-3">
              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3 rounded-xl text-xs font-mono uppercase tracking-wider bg-[#102330] text-white hover:bg-[#65C8C4] hover:text-[#102330] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="pt-5 space-y-3.5">
            {/* Name */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#102330]/70">
                  Name
                </label>
                {errors.name && (
                  <span className="text-[10px] font-mono text-red-500">{errors.name}</span>
                )}
              </div>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Full Name"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#B9C9C6]/50 bg-[#F8FAF8] text-sm text-[#102330] focus:outline-none focus:border-[#65C8C4] transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#102330]/70">
                  Phone
                </label>
                {errors.phone && (
                  <span className="text-[10px] font-mono text-red-500">{errors.phone}</span>
                )}
              </div>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="(626) 000-0000"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#B9C9C6]/50 bg-[#F8FAF8] text-sm text-[#102330] focus:outline-none focus:border-[#65C8C4] transition-colors font-mono"
              />
            </div>

            {/* Service */}
            <div>
              <label className="block text-[11px] font-mono uppercase tracking-wider text-[#102330]/70 mb-1">
                Service
              </label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#B9C9C6]/50 bg-[#F8FAF8] text-sm text-[#102330] focus:outline-none focus:border-[#65C8C4] transition-colors"
              >
                <option value="Drain & Rooter">01 Drain & Rooter</option>
                <option value="Leak Detection">02 Leak Detection</option>
                <option value="Sewer & Pipe Repair">03 Sewer & Pipe Repair</option>
                <option value="Water Heaters">04 Water Heaters</option>
                <option value="Water Lines">05 Water Lines</option>
                <option value="Water Main Service">06 Water Main Service</option>
                <option value="Emergency Plumbing">07 Emergency Plumbing</option>
                <option value="General Inspection">Inspection / Other</option>
              </select>
            </div>

            {/* Address */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#102330]/70">
                  Address
                </label>
                {errors.address && (
                  <span className="text-[10px] font-mono text-red-500">{errors.address}</span>
                )}
              </div>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Street address in Arcadia"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#B9C9C6]/50 bg-[#F8FAF8] text-sm text-[#102330] focus:outline-none focus:border-[#65C8C4] transition-colors"
              />
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl text-xs font-heading font-bold uppercase tracking-[0.14em] bg-[#102330] text-white hover:bg-[#65C8C4] hover:text-[#102330] transition-colors shadow-sm active:scale-98"
              >
                Submit Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
