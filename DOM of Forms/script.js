function divsion(name,id,array){
    var input=document.createElement(name)
    input.id=id
    for(var i=0;i<array.length;i++){
        var opt=document.createElement("option")
        opt.innerHTML=array[i]
        input.appendChild(opt)
    }
    return input
  
}

function foo(in1,type,name,idval){
    var input=document.createElement(in1)
    input.setAttribute("type","name")
    input.id=idval
  
    return input
}
function label(in2,type,tname,names){
    var lab=document.createElement(in2)
    lab.setAttribute(type,tname)
    lab.innerHTML=names
    return lab
}
function br(){
    var b=document.createElement("br")
    return b
}
var divtag=document.createElement("div")

var but=document.createElement("button")
but.innerHTML="Clik Me"
but.className="btn btn-primary"
divtag.className="fle"
divtag.append(but)

but.addEventListener("click",table)
var display=document.createElement("div")
display.className="table"

//var tabl=table("table",trows,"tr",data)
function table(){
    var arr=["First Name","Last Name","Address","Pincode","Gender","Food","State","Country"] 
    var fid=document.getElementById("fname").value
    var lid=document.getElementById("lname").value
    var addid=document.getElementById("address").value
    var pinid=document.getElementById("pincode").value
    var genid=document.getElementById("gender").value
    var foodid=document.getElementById("food").value
    var staid=document.getElementById("state").value
    var counid=document.getElementById("country").value
    var data=[fid,lid,addid,pinid,genid,foodid,staid,counid]
    var box=document.createElement("table")
    box.className="table"
    var r=document.createElement("tr")
    r.className="r1"
    for(var i=0;i<arr.length;i++){
        var h=document.createElement("th")
        h.className="head"
        h.innerHTML=arr[i]
        
        r.append(h)
        box.append(r)
    }
    var k=document.createElement("tr")
    k.className="r2"
    for(var j=0;j<data.length;j++){
        var d1=document.createElement("td")
        d1.className="data"
        d1.innerHTML=data[j]
        k.append(d1)
        box.append(k)
    }
    display.innerHTML=box
    document.body.append(box)
}


var flabel=label("label","for","fname","First Name")

var firstname=foo("input","type","fname","fname")

var llabel=label("label","for","lname","Last Name")
var lastname=foo("input","type","lname","lname") 

var add=label("label","for","address","Address")
var add1=foo("input","type","address","address") 

var pin=label("label","for","pincode","Pincode")
var pincode=foo("input","type","number","pincode") 

var gen=label("label","for","gender","Gender")
var gender=foo("input","type","gender","gender") 

var food1=label("label","for","food","Food")
var arr=["veg","non veg","Indian","chinease"]
var food2=divsion("select","food",arr)

var state1=label("label","for","state","State")
var state2=foo("input","type","state","state") 

var country=label("label","for","country","Country")
var country1=foo("input","type","country","country") 



var break1=br()
var break2=br()
var break3=br()
var break4=br()
var break5=br()
var break6=br()
var break7=br()
var break8=br()
var break9=br()
var break10=br()
var break11=br()
var break12=br()
var break13=br()
var break14=br()
var break15=br()
var break16=br()
var break17=br()


document.body.append(flabel,break1,firstname,break2,llabel,break3,lastname,break4,add,break5,add1,break6,pin,break7,pincode,break8,gen,break9,gender,break10,food1,break11,food2,break12,state1,break13,state2,break14,country,break15,country1,break16,break17,divtag)
var p1=new promise((resolve,reject)=>resolve("this is resolved"));
console.log(p1)