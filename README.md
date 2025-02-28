
Baixar “Portable XAMPP”;
Descompactar o XAMPP no Disco C:
Clicar no arquivo “XAMPP_Control”
	
npm install -g express
npm install -g express-generator
express -e --git MFlix   // -e para usar o ejs | - - git para usar o git.ignore | não funcionará por no pc da escola por causa de permições (usar no seu computador)
npx express -e --git MFlix (usar no computador da escola)
cd MFlix
npm install
npm start

criando database
mysql -u root -p
create database mflix
create table 
create table usuarios (
    usucodigo int not null auto_increment primary key,
    usuemail char(50) not null,
    ususenha char(15) not null);
insert into usuarios (usuemail, ususenha) values
    	    ("catatau@gmail.com","123"),
    	    ("zecolmeia@bol.com.br","teste"),
    	    ("tiaogaviao@outlook.com","123");


Voltando para o codigo fonte:

npm install mysql2
