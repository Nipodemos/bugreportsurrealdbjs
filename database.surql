DEFINE TABLE test SCHEMAFULL;
DEFINE FIELD name ON test TYPE string;
DEFINE FIELD updatedAt ON test TYPE datetime VALUE time::now() DEFAULT time::now() READONLY;

CREATE test:nipo SET name = 'nipodemos';
