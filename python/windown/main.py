from tkinter import *

#　点击button时对应的操作
def say_hello():
    print ('你好，gui !')

#　根窗口
root = Tk()
root.title('window with command') #主窗口标题
root.geometry('400x200')  #主窗口大小，中间的为英文字母x

# 次级窗口
com = Button(root,text = '打招呼', command = say_hello) #　第一个参数root说明com按钮是root的孩子，text指按钮的名称，command指点击按钮时所执行的操作
com.pack(side = BOTTOM)  #　次级窗口的位置摆放位置

# 事件循环
root.mainloop()
