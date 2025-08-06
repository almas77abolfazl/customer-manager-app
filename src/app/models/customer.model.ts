export interface Customer {
  id: number;
  avatar?: string;
  name: string;
  phone: string;
  status: 'active' | 'inactive';
  carType?: string;
  lastVisit?: string;
  notes?: string;
  tags?: string[];
  debt?: number;
}
