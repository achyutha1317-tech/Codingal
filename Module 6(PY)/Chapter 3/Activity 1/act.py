import datetime
import calendar

print("=======Welocme to the weather reporter App=======\n\n")

city = str(input("Which city do you live in???"))
temp = float(input("Enter the temperature in your city:    "))

if temp >= 45:
    print("Too hot outside...Just stay inside and be hydrated!!!!")

if city == "Bangalore":
    print("Always its fun to be in Bangalore!!!")
else:
    print("It has too much polution")


if temp >= 25:
    print("Its warm and sunny can go out")

elif temp <= 15:
    print("Its to cold...stay warm inside")

else:
    print("Can go ouyside but have warm clothes")


t = datetime.datetime.now()

print(f"The current time is: {t}")

print("The current time is: ", t)


print(calendar.calendar(t.year))

