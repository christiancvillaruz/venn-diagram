function calculate_inter(){
	
	if($("#myn3").val() == ""){
		alert("Enter Set A values!");
	}
	else if($("#myn4").val() == ""){
		alert("Enter Set B values!");
	}
	else{
		var amyn3 = new Array();
		var amyn4 = new Array();
		var inter = new Array();
		var j = 0;
		var str = '{';

		amyn3 = document.getElementById('myn3').value.split(',');
		amyn4 = document.getElementById('myn4').value.split(',');

		for(var i = 0; i < amyn3.length; i++){
			if(amyn4.find(amyn3[i]))
			inter[j++]=amyn3[i];
		}

		for(var j = 0; j<inter.length; j++){
			if(j != inter.length-1)
			str += inter[j] + ',';
			else
			str += inter[j];
		}

		document.getElementById("show").style.display = "block";
		document.getElementById("myresult").innerHTML= "<table style='font-size: 18px'><thead><tr><th>Result</th></tr></thead><tbody><tr><td>Set A = {" + amyn3 + "}</td></tr><tr><td>Set B = {" + amyn4 + "}</td></tr><tr><td><b class='text-success'>Set Intersection A&cap;B = " + str + "} <span class='fa fa-check'></span></b></td></tr></tbody></table>";
	}
}

function calculate_diff(){
	
	if($("#myn1").val() == ""){
		alert("Enter Set A values!");
	}
	else if($("#myn2").val() == ""){
		alert("Enter Set B values!");
	}
	else{
		var amyn1 = new Array();
		var amyn2 = new Array();
		var inter = new Array();
		var j = 0;
		var str = '';

		amyn1 = document.getElementById('myn1').value.split(',');
		amyn2 = document.getElementById('myn2').value.split(',');

		for(var i = 0; i<amyn1.length; i++){
			if(!(amyn2.find(amyn1[i])))
			inter[j++] = amyn1[i];
		}

		for(var j = 0; j<inter.length; j++){
			if(j != inter.length-1)
			str += inter[j] + ',';
			else
			str += inter[j];
		}
		document.getElementById("myresult").innerHTML= "<table style='font-size: 18px'><thead><tr><th>Result</th></tr></thead><tbody><tr><td>Set A = {" + amyn1 + "}</td></tr><tr><td>Set B = {" + amyn2 + "}</td></tr><tr><td><b class='text-success'>Set Difference A - B =  {" + str + "} <span class='fa fa-check'></span></b></td></tr></tbody></table>";
		document.getElementById("show").style.display = "block";
	}
}

function calculate_sym(){
	
	if($("#myn5").val() == ""){
		alert("Enter Set A values!");
	}
	else if($("#myn6").val() == ""){
		alert("Enter Set B values!");
	}
	else{
		var amyn3 = new Array();
		var amyn4 = new Array();
		var inter = new Array();
		var inter1 = new Array();
		var j = 0;
		var t = 0;
		var str = '';

		amyn3 = document.getElementById('myn5').value.split(',');
		amyn4 = document.getElementById('myn6').value.split(',');

		for(var i = 0; i<amyn3.length; i++){
			if(!(amyn4.find(amyn3[i])))
			inter[j++] = amyn3[i];
		}

		for(var k = 0; k<amyn4.length; k++){
			if(!(amyn3.find(amyn4[k])))
			inter1[t++] = amyn4[k];
		}

		inter = inter.concat(inter1);

		for(var j = 0; j<inter.length; j++){
			if(j != inter.length-1)
			str += inter[j] + ',';
			else
			str += inter[j];
		}
		document.getElementById("myresult").innerHTML= "<table style='font-size: 18px'><thead><tr><th>Result</th></tr></thead><tbody><tr><td>Set A = {" + amyn3 +"}</td></tr><tr><td>Set B = {" + amyn4 +"}</td></tr><tr><td><b class='text-success'>Set Symmetric Difference A &#8710; B = {" + str + "} <span class='fa fa-check'></span></b></td></tr></tbody></table>";
		document.getElementById("show").style.display = "block";
	}
}

function remSpace(n){
	return(n);
}

function remdup(arr){
	var i,
	len = arr.length,
	out = [],
	obj = {};
	for(i = 0; i < len; i++) {
		obj[arr[i]] = 0;
	}
	for(i in obj){
		out.push(i);
	}
	return out;
}

function keyin(data){
	var a = data.value;
	data.value = a.replace(/[^\d,-]/g, '');
}

function remcomma(obj){
	var utext = obj.value.trim();
	var firstChar = utext.substring(0, utext.length);
	
	if(firstChar == ','){
		utext = utext.substring(1);
	}
	
	utext = trimContinuousSymbols(utext.replace(/,+(?=,)/g,''),'.');
	utext = utext.replace(',,',',');
	utext = utext.replace('-\-','-');
	obj.value = utext;
}

function clearFields(){
	$('#universal_elements').val('');
	$('#universalset').val('');
	$('#setA_elements').val();
	$('#myn1').val('');
	$('#myn2').val('');
	$('#myn3').val('');
	$('#myn4').val('');
	$('#myn5').val('');
	$('#myn5').val('');
	$('#s1').val('');
	$('#s2').val('');
	document.getElementById("myresult").innerHTML= "";
	document.getElementById('show').style.display='none';
}

Array.prototype.find = function(searchStr){
	var returnArray = false;
	
	for(i = 0; i<this.length; i++){
		if(typeof(searchStr) == 'function'){
			if(searchStr.test(this[i])){
				if(!returnArray){ returnArray = [] }
				returnArray.push(i);
			}
		}
		else{
			if(this[i] === searchStr) {
				if(!returnArray){ returnArray = [] }
				returnArray.push(i);
			}
		}
	}
	
	return returnArray;
}

$(document).ready(function(){
	
	$("#operation").on('change', function(){
		if(this.value === ''){
			$(".universal").addClass('hide');
			$(".setA").addClass('hide');
			$(".setB").addClass('hide');
			$(".calc").addClass('hide');
		}
		else if(this.value == 'complement'){
			$(".universal").removeClass('hide');
			$(".setA").removeClass('hide');
			$(".setB").addClass('hide');
			$(".calc").removeClass('hide');
			
			$(".un").addClass('hide');
			$(".comp").removeClass('hide');
			$(".intr").addClass('hide');
			$(".dif").addClass('hide');
			$(".sym").addClass('hide');
			
			$("#universalset").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#universal_elements").val(str);
			});
			
			$("#s1").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#setA_elements").val(str);
			});
			
			$("#submit_comp").on('click', function(){
				
				var myn1 = $("#setA_elements").val();
				var myn2 = $("#universal_elements").val();
				
				if(myn1 == ""){
					alert("Enter Set A values!");
					$("#setA_elements").focus();
					return false;
				}
				else if(myn2 == ""){
					alert("Enter Universal Set values!");
					$("#universal_elements").focus();
					return false;
				}
				else{
					Array.prototype.uniq = function(){
					return this.filter(
						function(a){return !this[a] ? this[a] = true : false;}, {}
						);
					}
					var myn1dat = myn1.split(",").filter(remSpace);
					var myn2dat = myn2.split(",").filter(remSpace);
					myn1dat = myn1dat.uniq();
					myn2dat = myn2dat.uniq();
					var difference = [];
					jQuery.grep(myn2dat, function(el)
					{
						if (jQuery.inArray(el, myn1dat) == -1) difference.push(el);
					});
					document.getElementById('show').style.display='block';
					document.getElementById("myresult").innerHTML= "<table style='font-size: 18px'><thead><tr><th>Result</th></tr></thead><tbody><tr><td>Universal Set = {" + myn2 + "}</td></tr><tr><td>Set A = {" + myn1 + "}</td></tr><tr><td><b class='text-success'>Set Complement A' = {"+difference+"} <span class='fa fa-check'></span></b></td></tr></tbody></table>";
				}

			});
			
		}
		else if(this.value == 'union'){
			$(".universal").addClass('hide')
			$(".setA").removeClass('hide');
			$(".setB").removeClass('hide');
			$(".calc").removeClass('hide');
			
			$(".un").removeClass('hide');
			$(".comp").addClass('hide');
			$(".intr").addClass('hide');
			$(".dif").addClass('hide');
			$(".sym").addClass('hide');
			
			$("#s1").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#setA_elements").val(str);
			});
			
			$("#s2").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#setB_elements").val(str);
			});
			
			$("#submit_un").on('click', function(){
				
				var myn1=document.getElementById('setA_elements').value;
				var myn2=document.getElementById('setB_elements').value;
				
				if(myn1 == '') {
					alert('Enter Set A values!');
					return false;
				}
				else if(myn2 == '') {
					alert('Enter Set B values!');
					return false;
				}
				else{
					
					var union=new Array();
					var amyn1=new Array();
					var amyn2=new Array();
					var aset3=new Array();
					
					amyn1 = myn1.split(',');
					amyn2 = myn2.split(',');
					aset3 = amyn1.concat(amyn2);
					aset3 = aset3.sort();
					
					var results = [];
					var str='';
					
					results = remdup(aset3);
					
					for(var i=0; i<results.length; i++){
						if(i != results.length-1) {
							str += results[i]+',';
						}
						else{
							str += results[i];
						}
						
						document.getElementById("show").style.display = "block";
						document.getElementById("myresult").innerHTML= "<table style='font-size: 18px'><thead><tr><th>Result</th></tr></thead><tbody><tr><td>Set A = {" + myn1 + "}</td></tr><tr><td>Set B = {" + myn2 + "}</td></tr><tr><td><b class='text-success'>Set Union AUB = {" + str + "} <span class='fa fa-check'></span></b></td></tr></tbody></table>";
						
					}
				}
				
			});
			
		}
		else if(this.value == 'intersection'){
			$(".universal").addClass('hide')
			$(".setA").removeClass('hide');
			$(".setB").removeClass('hide');
			$(".calc").removeClass('hide');
			
			$(".un").addClass('hide');
			$(".comp").addClass('hide');
			$(".intr").removeClass('hide');
			$(".dif").addClass('hide');
			$(".sym").addClass('hide');
			
			$("#s1").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#myn3").val(str);
			});
			
			$("#s2").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#myn4").val(str);
			});
			
		}
		else if(this.value == 'difference'){
			$(".universal").addClass('hide')
			$(".setA").removeClass('hide');
			$(".setB").removeClass('hide');
			$(".calc").removeClass('hide');
			
			$(".un").addClass('hide');
			$(".comp").addClass('hide');
			$(".intr").addClass('hide');
			$(".dif").removeClass('hide');
			$(".sym").addClass('hide');
			
			$("#s1").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#myn1").val(str);
			});
			
			$("#s2").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#myn2").val(str);
			});
			
		}
		else if(this.value == 'symmetric'){
			$(".universal").addClass('hide')
			$(".setA").removeClass('hide');
			$(".setB").removeClass('hide');
			$(".calc").removeClass('hide');
			
			$(".un").addClass('hide');
			$(".comp").addClass('hide');
			$(".intr").addClass('hide');
			$(".dif").addClass('hide');
			$(".sym").removeClass('hide');
			
			$("#s1").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#myn5").val(str);
			});
			
			$("#s2").keyup(function(){
				var txt;
				txt = $(this).val();
				var text = txt.split("\n");
				var str = text.join(',');
				$("#myn6").val(str);
			});
			
		}
	});
	
});