var enJson = document.querySelector('#enJson');
var twJson = document.querySelector('#twJson');
var en = {};
var tw = {};

// data.Auth.__comma = [",", "，"];

for (var section in data) {
    en[section] = {};
    tw[section] = {};
    for (var k in data[section]) {
        var sameAsKeyReplace = data[section][k][0].replace(/%%/g, k);
        en[section]['__' + k] = sameAsKeyReplace.replace(/##/g, ','); // for json generator comma issue
        tw[section]['__' + k] = data[section][k][1];
    }
}

var ph1 = ['Vendor', 'Customer', 'Tax', 'Account', 'Date', 'DateRange', 'Status', 'Country', 'Currency', 'Timezone', 'ProductAndService'];
var ph2 = ['廠商', '客戶', '稅項', '科目', '日期', '日期區間', '狀態', '國家', '使用幣別', '公司所在時區', '商品或服務'];
tw['Placeholder'] = {};
en['Placeholder'] = {};
for (var i = 0; i < ph1.length; i++) {
    tw['Placeholder']['__' + ph1[i]] = '選擇' + ph2[i];
    if (['A', 'E', 'I', 'O', 'U'].includes(ph1[i][0])) {
        en['Placeholder']['__' + ph1[i]] = "Select an " + ph1[i];
    } else {
        if (ph1[i] == 'Tax') {
            en['Placeholder']['__' + ph1[i]] = "Select " + ph1[i] + "(es)";
            continue;
        }
        if (ph1[i] == 'DateRange') {
            en['Placeholder']['__' + ph1[i]] = "Select Date Range";
            continue;
        }
        if (ph1[i] == 'ProductAndService') {
            en['Placeholder']['__' + ph1[i]] = "Select  a  Product/Service";
            continue;
        }
        en['Placeholder']['__' + ph1[i]] = "Select a " + ph1[i];
    }
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