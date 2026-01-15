let total = 0

function addItem() {
  const item = document.getElementById('item').value
  const price = parseInt(document.getElementById('price').value)

  if (!item || !price) return

  const li = document.createElement('li')
  li.textContent = `${item} - ${price}`
  document.getElementById('list').appendChild(li)

  total += price
  document.getElementById('total').textContent = total

  document.getElementById('item').value = ''
  document.getElementById('price').value = ''
}
