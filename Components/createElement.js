export  function createElement(type,className,idName,text){
  const Element=document.createElement(type);
  Element.className=className;
  Element.id=idName;
  Element.textContent=text;
  return Element;

}