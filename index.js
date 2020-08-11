var enJson = document.querySelector('#enJson');
var twJson = document.querySelector('#twJson');
var en = {};
var tw = {};
for (var k in data) {
    en[k] = data[k][0];
    tw[k] = data[k][1];
}
enJson.append(JSON.stringify(en, null, 4));
twJson.append(JSON.stringify(tw, null, 4));