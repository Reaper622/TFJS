import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
import { getIrisData, IRIS_CLASSES } from './data';

window.onload = async () => {
    // 有 15 % 数据作为验证集
    const [xTrain, yTrain, xTest, yTest] = getIrisData(0.15);

    const model = tf.sequential();
    model.add(tf.layers.dense({
        units: 10,
        inputShape: [xTrain.shape[1]],
        activation: 'sigmoid',
    }));
    model.add(tf.layers.dense({
        units: 3,
        activation: 'softmax'
    }));
    // 设置损失函数
    model.compile({
        // 交叉熵
        loss: 'categoricalCrossentropy',
        optimizer: tf.train.adam(0.1),
        metrics: ['accuracy'],
    });

    await model.fit(xTrain, yTrain, {
        epochs: 100,
        validationData: [xTest, yTest],
        callbacks: tfvis.show.fitCallbacks(
            { name: '训练效果' },
            ['loss', 'val_loss', 'acc', 'val_acc'],
            { callbacks: ['onEpochEnd'] }
        )
    });


    window.predict = (form) => {
        const input = tf.tensor([[
            form.huae_length.value * 1,
            form.huae_width.value * 1,
            form.huab_length.value * 1,
            form.huab_width.value * 1,
        ]]);
        const pred = model.predict(input);
        alert(`预测结果: ${IRIS_CLASSES[pred.argMax(1).dataSync(0)]}`)
    }
};