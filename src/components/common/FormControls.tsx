import { ReactNode } from 'react';
import { Card as ShadcnCard } from '../ui/card';
import { Label } from '../ui/label';
import { Slider as ShadcnSlider } from '../ui/slider';
import { Switch as ShadcnSwitch } from '../ui/switch';
import { cn } from '../ui/utils';

// Styled Card з базовою стилізацією
interface StyledCardProps {
  children: ReactNode;
  className?: string;
}

export function StyledCard({ children, className }: StyledCardProps) {
  return (
    <ShadcnCard className={cn(
      'bg-gray-800/90 backdrop-blur-sm border-purple-700/50 p-4 sm:p-5 md:p-6',
      className
    )}>
      {children}
    </ShadcnCard>
  );
}

// Slider Control з label та description
interface SliderControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  description?: string;
  formatValue?: (value: number) => string;
  className?: string;
}

export function SliderControl({
  label,
  value,
  min,
  max,
  step,
  onChange,
  description,
  formatValue,
  className
}: SliderControlProps) {
  const displayValue = formatValue ? formatValue(value) : value.toString();
  
  return (
    <div className={cn('space-y-2', className)}>
      <Label className="text-purple-200 text-sm sm:text-base">
        {label}: {displayValue}
      </Label>
      <ShadcnSlider
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={([val]) => onChange(val)}
        className="w-full"
      />
      {description && (
        <p className="text-xs sm:text-sm text-purple-300">
          {description}
        </p>
      )}
    </div>
  );
}

// Switch Control з label
interface SwitchControlProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
  className?: string;
}

export function SwitchControl({
  label,
  checked,
  onChange,
  description,
  className
}: SwitchControlProps) {
  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between gap-4">
        <Label className="text-purple-200 text-sm sm:text-base">
          {label}
        </Label>
        <ShadcnSwitch
          checked={checked}
          onCheckedChange={onChange}
          className="flex-shrink-0"
        />
      </div>
      {description && (
        <p className="text-xs sm:text-sm text-purple-300">
          {description}
        </p>
      )}
    </div>
  );
}
