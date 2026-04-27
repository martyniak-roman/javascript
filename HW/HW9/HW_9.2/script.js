const arr =  ['Main', 'Products','About us','Contacts']

const ul = document.createElement('ul')

document.body.appendChild(ul)

for (const item of arr) {
  const li = document.createElement('li')
  li.innerText = item
  document.body.append(li)
}