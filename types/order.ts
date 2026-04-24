export interface OrderJSON {
  id: number;
  identifier: string;
  reference: string;
  shipper_id: number;
  product_id: number;
  vehicle_id: number;
  driver_id: number;
  order_number: string;
  processed_at: string;
  total_cost: number;
  subtotal_price: number;
  total_discount: number;
  total_surcharge: number;
  total_tax: number;
  total_price: number;
  total_outstanding: number;
  total_weight: number;
  weight_unit: string;
  total_distance: number;
  distance_unit: string;
  currency_code: string;
  require_signature: boolean;
  require_payment: boolean;
  order_status_id: OrderStatusJSON;
  invoice_status_id: string;
  note: string;
  product: ProductJSON;
  shipper: ShipperJSON;
  driver: DriverJSON;
  vehicle: VehicleJSON;
  order_lines: OrderLineJSON[];
  order_origins: OrderOriginJSON[];
  order_destinations: OrderDestinationJSON[];
  order_loads: OrderLoadJSON[];
  order_status_histories: OrderStatusHistoryJSON[];
}

export interface OrderLineJSON {
  id: number;
  reference: string;
  order_id: number;
  variant_id: number;
  name: number;
  cost_unit: number;
  cost_total: number;
  price_unit: number;
  price_subtotal: number;
  price_discount: number;
  price_surcharge: number;
  price_tax: number;
  price_total: number;
  quantity: number;
  weight: number;
  weight_unit: string;
  distance: number;
  distance_unit: string;
  currency_code: string;
  order_status_id: string;
  invoice_status_id: string;
}

export interface OrderOriginJSON {
  id: number;
  reference: string;
  order_id: number;
  line_id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  apartment: string;
  building: string;
  neighbourhood: string;
  city: string;
  region: string;
  country_code: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  pickup_date: string;
  pickup_time_window: number;
  accept_security_code: number;
  security_code: string;
  security_code_verified: boolean;
  resend_code_count: number;
  resend_code_lock_expire_at: string;
  note: string;
}

export interface OrderDestinationJSON {
  id: number;
  reference: string;
  order_id: number;
  line_id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  apartment: string;
  building: string;
  neighbourhood: string;
  city: string;
  region: string;
  country_code: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  dropoff_date: string;
  dropoff_time_window: number;
  accept_security_code: number;
  security_code: string;
  security_code_verified: boolean;
  resend_code_count: number;
  resend_code_lock_expire_at: string;
  order_status_id: string;
  note: string;
}

export interface OrderLoadJSON {
  id: number;
  destination_id: number;
  reference: string;
  order_id: number;
  line_id: number;
  commodity: string;
  packaging: string;
  packaging_count: number;
  weight: number;
  weight_unit: string;
  value: number;
  note: string;
}

export interface OrderStatusHistoryJSON {
  id: number;
  order_id: number;
  line_id: number;
  destination_id: number;
  old_status: string;
  new_status: string;
  note: string;
  changed_by: number;
  changed_at: string;
}

export interface ProductJSON {
  display_name: string;
}

export interface DriverJSON {
  name: string;
  phone: string;
  email: string;
}

export interface ShipperJSON {
  name: string;
  phone: string;
  email: string;
}

export interface VehicleJSON {
  licence_plate: string;
}
export type OrderStatusJSON =
  | "created"
  | "finalizing_details"
  | "matching_carriers"
  | "driver_assigned"
  | "delivered"
  | "cancelled"
  | "in_transit";

export interface OrderOrderJson {
  order_number: string;
}

export interface PersonelJSON {
  id: number;
  name: string;
}

export interface UserAssignJson {
  id: number;
  login?: string;
  personnel?: PersonelJSON;
}

export interface OrderAssignments {
  id: number;
  order_id: number;
  vehicle_id: number;
  driver_id: number;
  distance?: string;
  distance_unit: string;
  changed_by: number;
  changed_at: string;
  order_order: OrderOrderJson;
  vehicle: VehicleJSON;
  driver: DriverJSON;
  user: UserAssignJson;
}
