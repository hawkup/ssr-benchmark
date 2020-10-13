# SSR Benchmark

## Start docker
```
docker-compose up {next9, nuxt2, vue2, vue3}
```

## Start load test
```
k6 run --vus 1 --duration 2s _load_test/k6/script.js
```