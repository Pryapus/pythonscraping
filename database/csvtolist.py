import csv
import itertools



with open('database/allbrands.csv', newline='') as f:
    reader = csv.reader(f)
    data = list(reader)


CleanedList = list(itertools.chain.from_iterable(data))
