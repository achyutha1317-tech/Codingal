print("Welocme using Nested for loops")


user = int(input("How many rows do you want?: "))

for i in range(user):
    for j in range(i+1):
        print("* ", end = "")

    print()