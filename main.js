const $ = e => document.querySelector(e);

function FormToJSON(form) {
  form = new FormData(form);
  const data = {};
  const keys = form.keys();
  for(const key of keys) data[key] = form.get(key);
  return data;
}

const data = new Array();
const div = $('.data');

$('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const newData = FormToJSON(e.target);
  if( data.find(item => item.name === newData.name) ) {
    alert('tekrar');
  } else {
    data.push( newData );
    div.innerText = dataToText(data);
    e.target.reset();
  }
});

$('.save').addEventListener('click', () => {
  downloadAsFile( dataToText(data) )
});

$('.print').addEventListener('click', () => {
  const wnd = window.open('', 'window', 'width=300,height=300');
  wnd.document.body.append( div.cloneNode(true) );
  wnd.print();
  wnd.close();
});

function downloadAsFile(data, fileName = '') {
  let a = document.createElement("a");
  let file = new Blob([data], {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
  a.href = URL.createObjectURL(file);
  a.download = fileName + '.csv';
  a.click();
}

function dataToText(data) {
  const temp = new Array();
  const keys = Object.keys(data[0]);
  const t = [];
  for(const key of keys) t.push(key);
  temp.push( t.join('\t') );
  data.forEach(item => {
    const t = [];
    for(const key of keys)
      t.push(item[key]);
    temp.push( t.join('\t') );
  });
  return temp.join('\n');
}
