import { Clock } from "lucide-react";

const TimingSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-card rounded-2xl border border-border/50 shadow-md p-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            <Clock className="text-primary" size={28} />
          </div>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Clinic Timings</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border/50">
              <span className="font-medium text-foreground">Monday – Saturday</span>
              <span className="text-primary font-semibold">8:00 AM – 8:30 PM</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="font-medium text-foreground">Sunday</span>
              <span className="text-primary font-semibold">10:00 AM – 3:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingSection;
