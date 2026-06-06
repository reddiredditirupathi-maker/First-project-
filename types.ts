export interface IndianStock {
  id: string;
  name: string;
  ticker: string;
  quantity: number;
  buy_price: number;
  current_price: number;
  sector: string | null;
  created_at: string;
  updated_at: string;
}

export interface USStock {
  id: string;
  name: string;
  ticker: string;
  quantity: number;
  buy_price_usd: number;
  current_price_usd: number;
  sector: string | null;
  created_at: string;
  updated_at: string;
}

export interface MutualFund {
  id: string;
  name: string;
  units: number;
  buy_nav: number;
  current_nav: number;
  category: string | null;
  created_at: string;
  updated_at: string;
}

export interface SIPTracker {
  id: string;
  fund_name: string;
  monthly_amount: number;
  start_date: string;
  total_invested: number;
  current_value: number;
  expected_future_value: number | null;
  sip_date: number;
  created_at: string;
  updated_at: string;
}

export interface ETFHolding {
  id: string;
  name: string;
  ticker: string;
  quantity: number;
  buy_price: number;
  current_price: number;
  category: string | null;
  created_at: string;
  updated_at: string;
}

export interface Bond {
  id: string;
  name: string;
  bond_type: string;
  face_value: number;
  interest_rate: number;
  maturity_date: string;
  current_value: number;
  annual_income: number;
  created_at: string;
  updated_at: string;
}

export interface GoldHolding {
  id: string;
  form: string;
  quantity_grams: number;
  buy_price: number;
  current_price: number;
  created_at: string;
  updated_at: string;
}

export interface SilverHolding {
  id: string;
  form: string;
  quantity_grams: number;
  buy_price: number;
  current_price: number;
  created_at: string;
  updated_at: string;
}

export interface CryptoHolding {
  id: string;
  coin_name: string;
  symbol: string;
  quantity: number;
  buy_price: number;
  current_price: number;
  created_at: string;
  updated_at: string;
}

export interface CashHolding {
  id: string;
  account_name: string;
  bank_name: string;
  balance: number;
  account_type: string;
  created_at: string;
  updated_at: string;
}

export interface FinancialGoal {
  id: string;
  name: string;
  target_amount: number;
  current_amount: number;
  target_date: string | null;
  color: string | null;
  icon: string | null;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  id: string;
  type: string;
  asset_name: string;
  amount: number;
  quantity: number | null;
  transaction_date: string;
  category: string;
  notes: string | null;
  created_at: string;
}

export interface HistoricalPerformance {
  id: string;
  month_date: string;
  total_value: number;
  invested_amount: number;
  returns_pct: number;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  action: string;
  entity: string;
  details: string | null;
  performed_at: string;
}

export interface DividendIncome {
  id: string;
  stock_name: string;
  amount: number;
  dividend_date: string;
  dividend_type: string;
  created_at: string;
}

export interface UsdInrRate {
  id: string;
  rate: number;
  effective_date: string;
  created_at: string;
}

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  is_admin: boolean;
  created_at: string;
  updated_at: string;
}

export interface DashboardMetrics {
  totalNetWorth: number;
  totalInvested: number;
  currentValue: number;
  totalProfitLoss: number;
  annualReturn: number;
  monthlyReturn: number;
}
