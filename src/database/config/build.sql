BEGIN;
DROP TABLE IF EXISTS blood_bank , doners , patients CASCADE;
CREATE TABLE doners (
    id SERIAL PRIMARY KEY NOT NULL ,
    name VARCHAR(50) NOT NULL ,
    blood_group VARCHAR(5) NOT NULL ,
    contact_number INT NOT NULL ,
    blood_bank VARCHAR(50) NOT NULL
    );
CREATE TABLE blood_bank (
    name VARCHAR(50) NOT NULL ,
    city VARCHAR(50) NOT NULL ,
    contact_number INT NOT NULL ,
    list_of_doners INT ,
     FOREIGN KEY (list_of_doners) REFERENCES doners(id) ON UPDATE CASCADE 
);
CREATE TABLE patients (
    id SERIAL PRIMARY KEY NOT NULL ,
    name VARCHAR(50) NOT NULL ,
    blood_group VARCHAR(5) NOT NULL
);
COMMIT;
END;
