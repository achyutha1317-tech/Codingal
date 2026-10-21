name = "masaladosa"
price = 100.25
quantity = 5
extraMasala = True

#normally we just use multiple times print for this 
print("Hey")
print("This was the pervious way")


print("The name of the dish ", name, ".\nIts price is ", price, ".\nYou bought in total ", quantity, " . Availability status of extra masala is ", extraMasala, ".")

print(type(name), type(price), type(quantity), type(extraMasala))

total = price*quantity

print("Is the total here more than 300: ", total>300, "Thus the food is not affordable")

shopname = "Dream Bite"
bottomline = "from the heart of India"

print(shopname + "- " + bottomline)

print("The sixth  character here is ", bottomline[5])

idli = 45

print(price, idli)

papar = idli
idli = price
price = papar

print(price, idli)