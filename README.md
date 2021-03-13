# TFJS
A repo about using Tensorflow.js.

#### Environment
- Node.js
- TensorFlow.js 
- Parcel
- Http-server

## Elementary Level

### Height-Weight
> To predict a person's weight based on his height.

根据身高预测体重。

### linear-reggression
> To predict the result of a linear-reggression function.

判断一个线性回归的结果，只有一个神经元。

### logistic-regression
> To predict a logistic regression problem, which introduce the loss.

判断一个逻辑回归问题。

### XOR
> A multi-layer neural network is used to solve an XOR problem.

通过多层神经网络解决XOR问题。

### Overfit
> Use weight decay / dropout to solve the overfit problem.

通过 权重衰减/丢弃法 来解决过拟合问题。

## Intermediate Level

### Iris
> Use Iris data to train the classification model.

通过经典的鸾尾花数据来训练带有**softmax**的多层神经网络分类模型。

### Mnist
> Classical model to recognize handwritten numbers.

通过**Mnist**数据训练模型识别手写数字>

### Mobilenet
> This chapter is to show you how to use the pre-training model to classify the items.

通过使用预训练模型进行物品分类。

### Brand
> Classify the logo through transfer learning model.

通过迁移学习模型识别三种商标。

### Speech
> Use pre-training model to recognize speech.

使用`tfjs-models`的`speech-commands`包加载模型，训练语音识别。



## How to use ?
- First step
```
 npm install
 npm i parcel -g 
 npm i http-server -g
```

- Second step
```
 http-server data --cors
```

- Final step
```
parcel iris/index.html
```

Then you can see the page at [localhost:1234](http://localhost:1234)







