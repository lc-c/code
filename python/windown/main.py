from tkinter import *

#　点击button时对应的操作
def say_hello():
    print ('你好，gui !')

#　根窗口
root = Tk()
root.title('window with command') #主窗口标题
root.geometry('400x200')  #主窗口大小，中间的为英文字母x
yes = '是';
no = '不是';
def hover(number):
    # print(event.widget['id'])
    # if event.widget['text']!=no:
    #     event.widget['text'] = no
    # else:
    #     event.widget['text'] = yes

    if number == 1:
        com2["text"] = no
    else:
        com["text"] = yes

    com.place(relx=0.5, rely=0.5, anchor=CENTER, x=100, y=200)
strvar = StringVar()
strvar.set(no)
strvar2 = StringVar()
strvar2.set(yes)

# 次级窗口
com = Button(root,text="是",command = say_hello) #　第一个参数root说明com按钮是root的孩子，text指按钮的名称，command指点击按钮时所执行的操作
#com.pack(side = TOP)  #　次级窗口的位置摆放位置
com.place(relx=0.5, rely=0.5, anchor=CENTER, x=100, y=-300)
com.bind("<Enter>",hover(1));
com2 = Button(root,textvariable=strvar2, command = say_hello) #　第一个参数root说明com按钮是root的孩子，text指按钮的名称，command指点击按钮时所执行的操作
com2.place(relx=0.5, rely=0.5, anchor=CENTER, x=-100, y=200)
com2.bind("<Enter>",hover(2));
# 事件循环
root.mainloop()
