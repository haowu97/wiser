$$beta$$


```python

```


```python
import xlwings as xw
from math import log,sqrt,exp
from requests import get
import schedule
import datetime,time
from scipy import stats
```


```python
def get_50etf_price():
    url = "http://hq.sinajs.cn/list=sh510050"
    data = get(url).content.decode('gbk')
    data = data[data.find('"') + 1: data.rfind('"')].split(',')
    fields = ['股票名字', '今日开盘价', '昨日收盘价', '当前价格', '今日最高价', '今日最低价', '竞买价', '竞卖价',
              '成交的股票数', '成交金额', '买一量', '买一价', '买二量', '买二价', '买三量', '买三价', '买四量', '买四价',
              '买五量', '买五价', '卖一量', '卖一价', '卖二量', '卖二价', '卖三量', '卖三价', '卖四量', '卖四价',
              '卖五量', '卖五价', '日期', '时间']
    return list(zip(fields, data))
```


```python
get_50etf_price()
```




    [('股票名字', '50ETF'),
     ('今日开盘价', '0.000'),
     ('昨日收盘价', '3.458'),
     ('当前价格', '3.458'),
     ('今日最高价', '0.000'),
     ('今日最低价', '0.000'),
     ('竞买价', '3.456'),
     ('竞卖价', '3.456'),
     ('成交的股票数', '0'),
     ('成交金额', '0.000'),
     ('买一量', '858600'),
     ('买一价', '3.456'),
     ('买二量', '0'),
     ('买二价', '0.000'),
     ('买三量', '0'),
     ('买三价', '0.000'),
     ('买四量', '0'),
     ('买四价', '0.000'),
     ('买五量', '0'),
     ('买五价', '0.000'),
     ('卖一量', '858600'),
     ('卖一价', '3.456'),
     ('卖二量', '19500'),
     ('卖二价', '0.000'),
     ('卖三量', '0'),
     ('卖三价', '0.000'),
     ('卖四量', '0'),
     ('卖四价', '0.000'),
     ('卖五量', '0'),
     ('卖五价', '0.000'),
     ('日期', '2021-04-27'),
     ('时间', '09:25:00')]




```python
#获取到日期
def get_op_expire_day(date):
    url = "http://stock.finance.sina.com.cn/futures/api/openapi.php/StockOptionService.getRemainderDay?date={date}01"
    data = get(url.format(date=date)).json()['result']['data']
    return data['expireDay'], int(data['remainderDays'])


# 获取call、put的期权合约代码
def get_op_codes(date):
    url_up = "http://hq.sinajs.cn/list=OP_UP_510050" + str(date)[-4:]
    url_down = "http://hq.sinajs.cn/list=OP_DOWN_510050" + str(date)[-4:]
    data_up = str(get(url_up).content).replace('"', ',').split(',')
    codes_up = [i[7:] for i in data_up if i.startswith('CON_OP_')]
    data_down = str(get(url_down).content).replace('"', ',').split(',')
    codes_down = [i[7:] for i in data_down if i.startswith('CON_OP_')]
    return codes_up, codes_down
```


```python
get_op_expire_day('2021-04-25')
```




    (None, -18744)




```python
get_op_codes("2021-04-27")
```




    ([], [])




```python
# 获取期权数据
def get_op_price(code_list):

    url = "http://hq.sinajs.cn/list="
    for code in code_list:
        url = url + "CON_OP_{code},".format(code=code)
    url = url[0:-1]
    data = get(url).content.decode('gbk')
    data = data[:-1].split('\n')
    print(len(code_list), len(data))
    res_prc = []

    for dt in data:
        d = dt.split(',')
        res_prc.append([d[2], d[6], d[7]]) # 最新价 	涨幅（%）	行权价
        #res_prc.append([d[2],d[5],d[6],d[7]]) 最新价	持仓量	涨幅（%）	行权价
    return res_prc
```


```python
get_op_price('510050')
```

    6 6
    


    ---------------------------------------------------------------------------

    IndexError                                Traceback (most recent call last)

    <ipython-input-25-987dc270a890> in <module>
    ----> 1 get_op_price('510050')
    

    <ipython-input-7-167f0e580376> in get_op_price(code_list)
         13     for dt in data:
         14         d = dt.split(',')
    ---> 15         res_prc.append([d[2], d[6], d[7]]) # 最新价        涨幅（%）   行权价
         16         #res_prc.append([d[2],d[5],d[6],d[7]]) 最新价      持仓量     涨幅（%）   行权价
         17     return res_prc
    

    IndexError: list index out of range

