
import React, { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Button } from './ui/button';

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookAppointmentModal: React.FC<BookAppointmentModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const departments = [
    'Obstetrics & Gynecology', 'Ophthalmology', 'Pediatrics', 
    'Cardiology', 'Orthopedics', 'General Surgery', 
    'Pulmonology', 'Endocrinology', 'Urology', 
    'Dermatology', 'Dental', 'Anaesthesia', 'General Medicine'
  ];

  const doctorsData = [
    { name: 'Dr. Soheba Shukoor', department: 'Obstetrics & Gynecology' },
    { name: 'Dr. Syeda Bushra', department: 'Obstetrics & Gynecology' },
    { name: 'Dr. Hidayatullah Khan', department: 'Ophthalmology' },
    { name: 'Dr. Basith Hussain', department: 'Ophthalmology' },
    { name: 'Dr. Sachin Narkhede', department: 'Pediatrics' },
    { name: 'Dr. D. Ramesh', department: 'Pediatrics' },
    { name: 'Dr. Shoaib Ahmed', department: 'Cardiology' },
    { name: 'Dr. Hameed Parekh', department: 'Orthopedics' },
    { name: 'Dr. Asim', department: 'General Surgery' },
    { name: 'Dr. P. Navanith Sagar Reddy', department: 'Pulmonology' },
    { name: 'Dr. Naseemuddin N Shaikh', department: 'Endocrinology' },
    { name: 'Dr. Khizar Raoof Mohammed', department: 'Urology' },
    { name: 'Dr. Sushmitha B', department: 'Dermatology' },
    { name: 'Dr. Ayesha Nazneen', department: 'Dental' },
    { name: 'Dr. Asrar', department: 'Anaesthesia' },
    { name: 'Dr. Md. Abdul Muqtedar', department: 'General Medicine' },
    { name: 'Dr. Farha Deeba', department: 'Obstetrics & Gynecology' },
    { name: 'Dr. Mohammed Abdul Raheem', department: 'General Medicine' },
  ];

  const filteredDoctors = formData.department 
    ? doctorsData.filter(doc => doc.department === formData.department)
    : [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setError(null);

    if (name === 'department') {
        setFormData(prev => ({ ...prev, [name]: value, doctor: '' }));
    } else {
        setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateTime = (time: string) => {
      if (!time) return false;
      const [hours] = time.split(':').map(Number);
      return hours >= 9 && hours < 21;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!validateTime(formData.time)) {
        setError("Please select a time between 09:00 AM and 09:00 PM.");
        return;
    }

    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
        setError("Please select a valid future date.");
        return;
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '', phone: '', email: '', dob: '', department: '', doctor: '', date: '', time: ''
      });
      onClose();
    }, 2000);
  };

  const todayStr = new Date().toISOString().split('T')[0];

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-background/80 bg-opacity-75 transition-opacity backdrop-blur-sm" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-background rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-border">
          
          {submitted ? (
             <div className="p-10 text-center">
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                  <i className="fas fa-check text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Appointment Booked!</h3>
                <p className="text-muted-foreground">We have received your request. You will receive an SMS confirmation shortly.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="bg-primary px-6 py-4 flex justify-between items-center">
                <h3 className="text-lg leading-6 font-bold text-primary-foreground font-display">
                  Book an Appointment
                </h3>
                <button type="button" onClick={onClose} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              {error && (
                  <div className="bg-destructive/10 border-l-4 border-destructive p-4 mx-6 mt-6">
                      <div className="flex">
                          <div className="flex-shrink-0">
                              <i className="fas fa-exclamation-circle text-destructive"></i>
                          </div>
                          <div className="ml-3">
                              <p className="text-sm text-destructive">{error}</p>
                          </div>
                      </div>
                  </div>
              )}

              <div className="px-6 py-6 max-h-[70vh] overflow-y-auto space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2 space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Contact Number *</Label>
                      <Input id="phone" type="tel" name="phone" required pattern="[0-9]{10}" value={formData.phone} onChange={handleChange} placeholder="9876543210" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="you@example.com" />
                    </div>

                    <div className="space-y-2">
                       <Label htmlFor="dob">Date of Birth *</Label>
                       <Input id="dob" type="date" name="dob" required max={todayStr} value={formData.dob} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="department">Department *</Label>
                      <select id="department" name="department" required value={formData.department} onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">Select Department</option>
                        {departments.map(dept => <option key={dept} value={dept}>{dept}</option>)}
                      </select>
                    </div>

                    <div className="sm:col-span-2 space-y-2">
                      <Label htmlFor="doctor">Preferred Doctor (Optional)</Label>
                      <select id="doctor" name="doctor" value={formData.doctor} onChange={handleChange} disabled={!formData.department}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                        <option value="">{formData.department ? 'Select Doctor' : 'Please Select Department First'}</option>
                        {filteredDoctors.map((doc, index) => <option key={index} value={doc.name}>{doc.name}</option>)}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="date">Appointment Date *</Label>
                      <Input id="date" type="date" name="date" required min={todayStr} value={formData.date} onChange={handleChange} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="time">Preferred Time *</Label>
                      <Input id="time" type="time" name="time" required min="09:00" max="21:00" value={formData.time} onChange={handleChange} />
                      <p className="text-xs text-muted-foreground">9:00 AM - 9:00 PM</p>
                    </div>
                  </div>
              </div>

              <div className="bg-muted/50 px-6 py-4 sm:flex sm:flex-row-reverse gap-3">
                <Button type="submit" className="w-full sm:w-auto">Confirm Booking</Button>
                <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto mt-3 sm:mt-0">Cancel</Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookAppointmentModal;
