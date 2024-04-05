# 测试结果
## hoshino

### 观察测试结果
``` js
const patterns = ["apple", "maple", "Snapple"];
const haystack = "Nobody likes maple in their apple flavored Snapple.";
// 第一次 [0.33ms]
// 第二次 [0.09ms]
// 第三次 [0.14ms]
// 第四次 [0.37ms]

```

``` js
const patterns = ["喜欢", "想要", "没话说"];
const haystack =
"当你喜欢一个人，你会发现自己想要为他们做任何事情。这种想要超越了自我，变成了一种自然的本能。即使有时候没有话可说，但在对方的陪伴下，那份默契和温暖就足以填满整个空间。";

// 第一次 [1.69ms]
// 第二次 [0.16ms]
// 第三次 [0.17ms]
// 第四次 [0.16ms]
```

``` js
// 英文文档 （50818-Total 8290-Words  50190-Characters 0-Chinese）
const haystack = await Bun.file(import.meta.dir + "/files/sicp.txt").text();
const patterns = ["Lisp", "Scheme", "SICP"];
// 第一次 [0.67ms] 
// 第二次 [0.43ms]
// 第三次 [0.66ms]
// 第四次 [0.17ms]
// 第五次 [0.41ms]
// 更换pattern
  const patterns = [
    "Embedded definitions must come first in a procedure body.",
  ];
// 第一次 [0.50ms]
// 第二次 [0.61ms]
// 第三次 [0.18ms]
// 第四次 [0.31ms]
```

``` js
// 中文文档 （8154-Total 19-Words  7987-Characters 6912-Chinese）
const haystack = await Bun.file(import.meta.dir + "/files/mandarin.txt").text();
const patterns = ["香港", "妈妈", "出行"];
// 第一次 [1.17ms] 
// 第二次 [0.83ms]
// 第三次 [0.50ms]
// 第四次 [0.47ms]
// 第五次 [1.20ms]

// 更换pattern
  const patterns = [
    "爱迪生也一样，也有梦想，他的梦想就是当一名发明家，可是他是怎么成功的呢？"
  ];
// 第一次 [0.60ms]
// 第二次 [0.94ms]
// 第三次 [0.67ms]
// 第四次 [0.30ms]
```
### AB测试结果
``` bash
ab -n 1000 -c 10 http://localhost:3000/hoshino/

Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /hoshino/
Document Length:        13 bytes

Concurrency Level:      10
Time taken for tests:   0.116 seconds
Complete requests:      1000
Failed requests:        0
Non-2xx responses:      1000
Total transferred:      137000 bytes
HTML transferred:       13000 bytes
Requests per second:    8625.75 [#/sec] (mean)
Time per request:       1.159 [ms] (mean)
Time per request:       0.116 [ms] (mean, across all concurrent requests)
Transfer rate:          1154.03 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.3      0       4
Processing:     0    0   2.0      0      61
Waiting:        0    0   2.0      0      61
Total:          0    1   2.0      0      62

Percentage of the requests served within a certain time (ms)
  50%      0
  66%      1
  75%      1
  80%      1
  90%      1
  95%      1
  98%      3
  99%      5
 100%     62 (longest request)
```

## @napi-rs/canvas

### 观察测试结果

``` js
// 验证码生成
// 第一次 [21.33ms]
// 第二次 [11.81ms]
// 第三次 [2.36ms]
// 第四次 [3.90ms]
```

### AB测试结果

``` bash
ab -n 1000 -c 10 http://localhost:3000/canvas
This is ApacheBench, Version 2.3 <$Revision: 1903618 $>
Copyright 1996 Adam Twiss, Zeus Technology Ltd, http://www.zeustech.net/
Licensed to The Apache Software Foundation, http://www.apache.org/

Benchmarking localhost (be patient)
Completed 100 requests
Completed 200 requests
Completed 300 requests
Completed 400 requests
Completed 500 requests
Completed 600 requests
Completed 700 requests
Completed 800 requests
Completed 900 requests
Completed 1000 requests
Finished 1000 requests


Server Software:        
Server Hostname:        localhost
Server Port:            3000

Document Path:          /canvas
Document Length:        3926 bytes

Concurrency Level:      10
Time taken for tests:   0.169 seconds
Complete requests:      1000
Failed requests:        999
   (Connect: 0, Receive: 0, Length: 999, Exceptions: 0) // 这些失败指的是响应长度的变化，而不是服务处理请求的能力
Total transferred:      2862508 bytes
HTML transferred:       2759508 bytes
Requests per second:    5920.56 [#/sec] (mean)
Time per request:       1.689 [ms] (mean)
Time per request:       0.169 [ms] (mean, across all concurrent requests)
Transfer rate:          16550.43 [Kbytes/sec] received

Connection Times (ms)
              min  mean[+/-sd] median   max
Connect:        0    0   0.1      0       1
Processing:     1    1   2.3      1      24
Waiting:        0    1   2.3      1      24
Total:          1    2   2.3      1      24

Percentage of the requests served within a certain time (ms)
  50%      1
  66%      1
  75%      2
  80%      2
  90%      2
  95%      3
  98%      4
  99%     24
 100%     24 (longest request)
```