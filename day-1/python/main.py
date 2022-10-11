def greeter(name )  :
    specialChars = "~!@#$%^&*()_+`-={}|[]\:"";'<>?,./ "
    if (name == "Bolu" or name == "Odun"):
        return "Welcome back, " + name
    elif(name ):
        for char in name :
            if char in specialChars:
                return "Please remove all spaces and special characters from your name"
    else:
        return "It is nice to meet you, " + name


a = greeter("Bolu")
b = greeter("Odun")
c = greeter("Bolu Odun")
d = greeter("Bolu@Odun")
print(a)
print(b)
print(c)
print(d)