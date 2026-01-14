
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setComment('');
        onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-background/80 bg-opacity-75 transition-opacity backdrop-blur-sm" onClick={onClose}></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-background rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border border-border">
          
          {submitted ? (
             <div className="p-10 text-center">
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6">
                  <i className="fas fa-check text-3xl text-green-600"></i>
                </div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We appreciate your feedback. It helps us improve our services.</p>
             </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="bg-background px-6 py-4 border-b border-border flex justify-between items-center">
                <h3 className="text-lg leading-6 font-bold text-foreground font-display">
                  Share Your Feedback
                </h3>
                <button type="button" onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>

              <div className="px-6 py-6 space-y-6">
                  <div className="text-center">
                      <Label className="block text-sm font-medium mb-2">How was your experience?</Label>
                      <div className="flex justify-center space-x-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                              <button 
                                key={star} 
                                type="button"
                                onClick={() => setRating(star)}
                                className={`text-3xl focus:outline-none transition-transform hover:scale-110 ${rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                              >
                                  <i className="fas fa-star"></i>
                              </button>
                          ))}
                      </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Comments</Label>
                    <Textarea 
                        id="comment" 
                        required
                        rows={4} 
                        placeholder="Tell us about your visit..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                  </div>
              </div>

              <div className="bg-muted/50 px-6 py-4 flex flex-row-reverse gap-3">
                <Button type="submit" disabled={rating === 0 || !comment} className="w-full sm:w-auto">
                  Submit Feedback
                </Button>
                <Button type="button" variant="outline" onClick={onClose} className="w-full sm:w-auto">
                  Cancel
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
