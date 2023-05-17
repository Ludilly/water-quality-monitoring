import { AgentsLimitsUnits } from '../enums';

export const formatValueToUnit = (
  value: string, unit: AgentsLimitsUnits,
): string => `${value} ${unit}`;
