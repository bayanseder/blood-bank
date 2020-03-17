BEGIN;
INSERT INTO doners (name , blood_group ,contact_number , blood_bank)
    VALUES ('mark','A+',23425687,'abu majed bloodbank'),
           ('sofyan','B+',55823978,'hart of jordan'),
           ('hassan','AB-',763683257,'healthy qatar'),
           ('maria','O-',356828633,'sweet blood');

INSERT INTO patients (name , blood_group)
    VALUES ('abd al kareem','B-'),
            ('tom','O-'),
            ('rania','B+'),
            ('susan','AB+');

INSERT INTO blood_bank (name , city , contact_number ,list_of_doners)
    VALUES ('abu majed bloodbank','hebron',532873432,1),
           ('hart of jordan','amman',84398234,2),
           ('healthy qatar','qatar',712449634,3),
           ('sweet blood','usa',11245677,4);
COMMIT;
END;
