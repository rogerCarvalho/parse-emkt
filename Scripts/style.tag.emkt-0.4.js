/* MODO DE USAR
*
*
* 1. insira os scripts e o style no head do email-marketing prestando atenção para ajustar o caminho do script
*  - style.css
*  - jQuery
*  - colocar a ultima versão do style.tag.emkt 
<link rel="stylesheet" href="Scripts/style.css">
<script src="Scripts/jquery-1.10.1.min.js"></script>
<script src="Scripts/style.tag.emkt-0.4.js"></script>
*
* 2. Colocar span e uma classe para o css
* 3. Ir em style.css e definir as propriedades das classes usadas
+     - apenas as propriedades color, font-size, font-weight, font-family são suportadas nessa versão
+     - redefinir os padrões da classe defaultTabela com o estilo geral dos textos
+     - redefinir a line-height  das <td> em defaulLH
+
* 4. Abrir no navegador o html, abri o firebug, clicar com o botão direito em <html> e dar 'Copy HTML'
* 5. Colar o código em um arquivo html
* 6. verificar se é necessário adicionar algum estilo não previsto (qualquer propriedade que não seja color, font-size, font-weight, font-family)
* 7. Mudar o title
* 8. Apagar os styles e scripts do head
* 9. Realizar os testes normalmente
*
*
*/


$(document).ready(function(){
	// variaveis + elementos
	var tr = $('tr')
	   , td = $('td')
	   , tabela = $('table')
	   , allImg = $('img')
	   ;

	// set tr style com line-height:25%
	tr.css('line-height','25%');

	// set img border = 0
	allImg.attr('border', '0');

	// processa td
	td.each(function(){
		var self = $(this);
		self.attr('align', 'left');
		self.attr('valign', 'top');
		// set td com line-height: 1.2 quando tem texto
		if(self.text().trim().length){
			self.addClass('defaultLH');
		}
		// remove as img spacer.gif e set td width e height
		if(self.children('img').length > 0){
			var img = self.children('img');
			var imgSrc = img.attr('src'); 
			if( imgSrc.match(/spacer.gif/)){
				var iw = img.attr('width'),
					ih = img.attr('height')
				self.attr('width', iw);
				self.attr('height', ih);
				img.remove();
				self.text(self.text().trim());
			}
		}
	});

	// estilo padrão dos textos, aplicados à table
	tabela.addClass('defaultTabela');

	// checa todos os elementos em busca da class, passa a propriedade da classe para css inline no elemento
	$("*").each(function(){
		var este = $(this);
		if(este.attr('class') != undefined){
			var classe = este.attr('class')
			  , fz = este.css('font-size')
			  , ff = este.css('font-family')
			  , fw = este.css('font-weight')
			  , c = rgb2hex(este.css('color'))
			  , lh = este.css('line-height')
			  ;
			  console.log(c);
			if (classe == 'defaultLH'){
				este.css('line-height', lh);
			}else{
				este.css('font-size', fz);
				este.css('font-family', ff);
				este.css('font-weight', fw);
				este.attr('style', este.attr('style') + ' color: ' + c +';');
			}
			
			este.removeAttr('class');
		}
		
	});

	
		//Function to convert hex format to a rgb color
		function rgb2hex(rgb){
		 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
		 return "#" +
		  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
		  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2);
		}

});


/*  Sugestão de melhorias v.0.3
*
*   1. Definir o caminho das imagens no servidor por um prompt de comando para subistituir tudo de uma vez
*   2. É possível fazer uma integração com a exportação  do photoshop?
*   3. processar a tag <a>, o default já deve ter target="_blank" e text-decoration:none
*/