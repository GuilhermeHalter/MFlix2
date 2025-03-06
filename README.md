# MFlix
- Baixar “Portable XAMPP”;
- Descompactar o XAMPP no Disco C:
- Clicar no arquivo “XAMPP_Control” 
----------------------------------------------------------------------------------------------
- npm install -g express<br/>
- npm install -g express-generator<br/>
- express -e --git MFlix   // -e para usar o ejs | - - git para usar o git.ignore | não funcionará por no pc da escola por causa de permições (usar no seu computador)
- npx express -e --git MFlix (usar no computador da escola)<br/>
- cd MFlix<br/>
- npm install<br/>
- npm start<br/>

### criando database

```bash
mysql -u root -p
```

```bash
create database mflix
```

```bash
create table usuarios (
    usucodigo int not null auto_increment primary key,
    usuemail char(50) not null,
    ususenha char(15) not null);
```

```bash
insert into usuarios (usuemail, ususenha) values
    	    ("catatau@gmail.com","123"),
    	    ("zecolmeia@bol.com.br","teste"),
    	    ("tiaogaviao@outlook.com","123");
```





Voltando para o codigo fonte:

npm install mysql2
