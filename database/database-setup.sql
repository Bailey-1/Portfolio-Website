CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

DROP TABLE IF EXISTS table1;
DROP TABLE IF EXISTS table2;

CREATE TABLE IF NOT EXISTS table1 (
  acc_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  acc_createTime timestamp DEFAULT now()
);

CREATE TABLE IF NOT EXISTS table2 (
  pro_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  pro_name TEXT DEFAULT 'NULL',
  acc_id uuid REFERENCES table1(acc_id),
  pro_time timestamp DEFAULT now()
);  