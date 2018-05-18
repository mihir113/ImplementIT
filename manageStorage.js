function setStorageNewSR(sr_summary_text,csi) {
  localStorage.setItem('varSRSummary', sr_summary_text);
  localStorage.setItem('varCSINumber', csi);
}


function getStorageNewSR() {

var cat2 = localStorage.getItem("varSRSummary");	
var cat1 = localStorage.getItem("varCSINumber");	
console.log(cat1+cat2);  
}