CREATE TABLE clientes (
	id_cliente serial primary key,
	nome text not null,
	cpf int not null,
	email varchar not null,
	senha varchar not null
)
CREATE TABLE produtos (
	id_produto serial primary key,
	nome text not null,
	descri varchar not null,
	preco real not null,
)

INSERT INTO produtos (nome, descri, preco)
VALUES ('Kit Som Ambiente Pro Home 120w + 2 Caixas De Parede Pretas', 'Amplificador para som ambiente Bluetooth usb/fm/sd/mmc compacto para uso geral, desenvolvido pela Orion, com alto desempenho e qualidade de reprodução para todas as faixas de frequência de áudio, Ideal para completar qualquer projeto de Som Residencial', 471.59)	

INSERT INTO produtos (nome, descri, preco)
VALUES ('Caixa de Som Bluetooth FLIP 5 JBL 20W Classificação IPX7 À prova d¿água com até 12 horas de bateria - Preto', 'Todas as informações divulgadas são de responsabilidade do Fabricante/Fornecedor.Verifique com os fabricantes do produto e de seus componentes eventuais limitações à utilização de todos os recursos e funcionalidades. Evite o uso prolongado do aparelho com volume alto (potência superior a 85 decibéis), isso poderá acarretar danos a sua audição.Imagens meramente ilustrativas', 719.99)	

INSERT INTO produtos (nome, descri, preco)
VALUES ('Kit Som Automotivo Caixa Trio Pioneer Fox Subwoofer 12', 'Itens Incluso: 01- Driver Corneta 100w RMS 01- Super Tweeter 100w RMS 01- Caixa de Som Trio 12 01- Subwoofer 12 Pioneer TS-w3060br 350w RMS 01- Modulo Taramps TL1500  igital 3 canais 01- Cabo RCA 5 metros ( Brinde Especial )', 1201.07)	

INSERT INTO produtos (nome, descri, preco)
VALUES ('Caixa de Som Bluetooth JBL GO 2 com 3W Classificação IPX7 À prova d’água USB e até 5 horas de bateria - Preto', 'A JBL GO 2 é uma caixa de som com Bluetooth à prova d’água e completa, para você levar por toda parte. Transmita música sem fio através de Bluetooth por até 5 horas ininterruptas de som com qualidade JBL.', 219.99 )	

INSERT INTO produtos (nome, descri, preco)
VALUES ('Caixa de som amplificada bomber papao 500 bluetooth 18 watts grande audio profissional grave forte', 'A Bomber Papão 500 é uma caixa de som super versátil, super potente, fácil de transportar e animar suas festas e eventos. Possui excelente desempenho em espaços grandes e ao ar livre. Possui um woofer de 12 polegadas', 739.9 )	

INSERT INTO produtos (nome, descri, preco)
VALUES ('Caixa de Som Amplificada Mondial CM-700 Bluetooth com 700W Woofer 15” TWS Entrada para Microfone USB com Equalizador e Flash Light', 'O agito dos encontros com a família ou amigos é sempre algo muito especial, não é mesmo? E nesse momento de descontração, a boa música é indispensável para a diversão ser completa.', 999.99 )	

