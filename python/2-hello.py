
message = '  hello world!!!   '
# 转换大小写
print(message.upper()) 
print(message.lower())
# 去除空白，去除后的值要赋值给变量 
# 去除末尾空白 lstrip() 去除开头空白 lstrip() 去除首尾空白 strip()
message = message.lstrip()
print(message)
message = '233 hello'
print(message.title())

