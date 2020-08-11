var enJson = document.querySelector('#enJson');
var twJson = document.querySelector('#twJson');
var en = {};
var tw = {};
for (var k in data) {
    en[k] = data[k][0];
    tw[k] = data[k][1];
}

enStr = JSON.stringify(en, null, 4);
twStr = JSON.stringify(tw, null, 4);

enJson.append(enStr);
twJson.append(twStr);

// let en = JSON.stringify(en);
let dataUri1 = 'data:application/json;charset=utf-8,' + encodeURIComponent(enStr);
let exportFileDefaultName1 = 'EN.json';

let enDownload = document.querySelector('#enDownload');
enDownload.setAttribute('href', dataUri1);
enDownload.setAttribute('download', exportFileDefaultName1);

let dataUri2 = 'data:application/json;charset=utf-8,' + encodeURIComponent(twStr);
let exportFileDefaultName2 = 'TC.json';

let twDownload = document.querySelector('#twDownload');
twDownload.setAttribute('href', dataUri2);
twDownload.setAttribute('download', exportFileDefaultName2);