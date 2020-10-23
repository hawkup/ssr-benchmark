# SSR Benchmark

## Start docker
```
docker-compose up {next9, nuxt2, vue2, vue3}
```

## Start load test
```
k6 run --vus 10 --duration 10s _load_test/k6/script.js
```

### Next9
```
scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
        * default: 10 looping VUs for 10s (gracefulStop: 30s)


running (10.0s), 00/10 VUs, 8119 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  10s

    ✓ is status 200

    checks.....................: 100.00% ✓ 8119 ✗ 0   
    data_received..............: 18 MB   1.8 MB/s
    data_sent..................: 650 kB  65 kB/s
    http_req_blocked...........: avg=5.03µs  min=1.1µs   med=2.4µs   max=4.59ms  p(90)=3µs     p(95)=3.6µs  
    http_req_connecting........: avg=861ns   min=0s      med=0s      max=1.51ms  p(90)=0s      p(95)=0s     
    http_req_duration..........: avg=12.18ms min=912.6µs med=10.99ms max=86.98ms p(90)=16.23ms p(95)=20.99ms
    http_req_receiving.........: avg=97.06µs min=18.1µs  med=45.5µs  max=40.73ms p(90)=74.4µs  p(95)=81.81µs
    http_req_sending...........: avg=20.72µs min=5.6µs   med=11.5µs  max=24.44ms p(90)=19.3µs  p(95)=31.39µs
    http_req_tls_handshaking...: avg=0s      min=0s      med=0s      max=0s      p(90)=0s      p(95)=0s     
    http_req_waiting...........: avg=12.06ms min=842.9µs med=10.91ms max=86.91ms p(90)=16.08ms p(95)=20.64ms
    http_reqs..................: 8119    807.932406/s
    iteration_duration.........: avg=12.31ms min=1.03ms  med=11.11ms max=87.11ms p(90)=16.36ms p(95)=21.21ms
    iterations.................: 8119    807.932406/s
    vus........................: 10      min=10 max=10
    vus_max....................: 10      min=10 max=10
```

### Nuxt2
```
scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
        * default: 10 looping VUs for 10s (gracefulStop: 30s)


running (10.1s), 00/10 VUs, 3975 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  10s

    ✓ is status 200

    checks.....................: 100.00% ✓ 3975 ✗ 0   
    data_received..............: 5.1 MB  508 kB/s
    data_sent..................: 318 kB  32 kB/s
    http_req_blocked...........: avg=12.48µs min=1.1µs  med=2.5µs   max=8.78ms   p(90)=3.06µs  p(95)=4.4µs  
    http_req_connecting........: avg=7.62µs  min=0s     med=0s      max=8.72ms   p(90)=0s      p(95)=0s     
    http_req_duration..........: avg=25.05ms min=2.13ms med=19.78ms max=185.43ms p(90)=35.6ms  p(95)=40.48ms
    http_req_receiving.........: avg=52.06µs min=15.8µs med=43.4µs  max=860.5µs  p(90)=73.96µs p(95)=79.6µs 
    http_req_sending...........: avg=15.79µs min=5.8µs  med=11.8µs  max=1.87ms   p(90)=20.6µs  p(95)=32.5µs 
    http_req_tls_handshaking...: avg=0s      min=0s     med=0s      max=0s       p(90)=0s      p(95)=0s     
    http_req_waiting...........: avg=24.98ms min=2.01ms med=19.7ms  max=185.37ms p(90)=35.55ms p(95)=40.41ms
    http_reqs..................: 3975    394.895265/s
    iteration_duration.........: avg=25.17ms min=2.39ms med=19.9ms  max=185.53ms p(90)=35.75ms p(95)=40.64ms
    iterations.................: 3975    394.895265/s
    vus........................: 10      min=10 max=10
    vus_max....................: 10      min=10 max=10
```

### Vue2
```
scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
        * default: 10 looping VUs for 10s (gracefulStop: 30s)


running (10.0s), 00/10 VUs, 17979 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  10s

    ✓ is status 200

    checks.....................: 100.00% ✓ 17979 ✗ 0   
    data_received..............: 6.7 MB  670 kB/s
    data_sent..................: 1.4 MB  143 kB/s
    http_req_blocked...........: avg=6.76µs   min=900ns   med=2.2µs  max=11.68ms p(90)=3.1µs    p(95)=4.5µs   
    http_req_connecting........: avg=2.37µs   min=0s      med=0s     max=11.37ms p(90)=0s       p(95)=0s      
    http_req_duration..........: avg=5.38ms   min=347.3µs med=4.76ms max=57.87ms p(90)=8.63ms   p(95)=10.93ms 
    http_req_receiving.........: avg=251.39µs min=11.7µs  med=34.6µs max=53.47ms p(90)=117.36µs p(95)=527.61µs
    http_req_sending...........: avg=26.1µs   min=4µs     med=10µs   max=29.34ms p(90)=18.6µs   p(95)=23.01µs 
    http_req_tls_handshaking...: avg=0s       min=0s      med=0s     max=0s      p(90)=0s       p(95)=0s      
    http_req_waiting...........: avg=5.1ms    min=305.1µs med=4.63ms max=53.21ms p(90)=8.35ms   p(95)=10.2ms  
    http_reqs..................: 17979   1790.169231/s
    iteration_duration.........: avg=5.55ms   min=423.2µs med=4.92ms max=57.95ms p(90)=8.86ms   p(95)=11.3ms  
    iterations.................: 17979   1790.169231/s
    vus........................: 10      min=10  max=10
    vus_max....................: 10      min=10  max=10
```

### Vue3
```
scenarios: (100.00%) 1 scenario, 10 max VUs, 40s max duration (incl. graceful stop):
        * default: 10 looping VUs for 10s (gracefulStop: 30s)


running (10.0s), 00/10 VUs, 16415 complete and 0 interrupted iterations
default ✓ [======================================] 10 VUs  10s

    ✓ is status 200

    checks.....................: 100.00% ✓ 16415 ✗ 0   
    data_received..............: 5.7 MB  566 kB/s
    data_sent..................: 1.3 MB  131 kB/s
    http_req_blocked...........: avg=8.33µs  min=1µs     med=2.2µs  max=21.24ms p(90)=3.1µs   p(95)=5.9µs   
    http_req_connecting........: avg=4.34µs  min=0s      med=0s     max=20.95ms p(90)=0s      p(95)=0s      
    http_req_duration..........: avg=5.9ms   min=301µs   med=4.98ms max=76.17ms p(90)=9.16ms  p(95)=14.28ms 
    http_req_receiving.........: avg=180.5µs min=14.2µs  med=34.5µs max=55.82ms p(90)=65.86µs p(95)=318.03µs
    http_req_sending...........: avg=37.4µs  min=5µs     med=10.2µs max=70.51ms p(90)=22.2µs  p(95)=32.53µs 
    http_req_tls_handshaking...: avg=0s      min=0s      med=0s     max=0s      p(90)=0s      p(95)=0s      
    http_req_waiting...........: avg=5.68ms  min=260.8µs med=4.86ms max=74.2ms  p(90)=8.77ms  p(95)=13.36ms 
    http_reqs..................: 16415   1634.950643/s
    iteration_duration.........: avg=6.07ms  min=406µs   med=5.15ms max=76.27ms p(90)=9.39ms  p(95)=14.55ms 
    iterations.................: 16415   1634.950643/s
    vus........................: 10      min=10  max=10
```