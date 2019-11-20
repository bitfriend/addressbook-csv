# Employee Roster: A javascript debug and code fix exercise

**Your task is to examine the provided code, locate and debug some errors,
complete any missing functionality to arrive at the desired output (see
below)**

The code provided accepts data input from the console. The data contains staff
details; if the data is valid, it is then saved in a Staff Roster array for
retrieval by this and other, fictional, applications.

**Code flow**: read data from the console, store a function in a staffRoster
array for access later so that staff members details can be output. The easiest
way to understand this is to simply `cat sample.csv | node problem.js` and
examine the output.

You can see some sample input data by looking within `sample.csv`, this is
a small sample of a much larger dataset. You should validate the input data you
receive, **there are going to be errors** in the data. If you find any input
with an error, add the staff ID only to the Staff Roster array and simply
output a null or empty string (excluding the staff ID).

The staff roster uses a pretty crude indexing system, the first employee read
from the console becomes staff ID #1, the second is #2 and so on sequentially.
Where you identify invalid data, assign an ID regardless, output the staff ID
and a null or empty string for the staff details.

**Desired Output**

Output staff details in comma separated format ensuring each field or element
is fully trimmed (remove any leading or trailing spaces). The output for the
first three staff members might be expected to look as follows:

```
#1,Adrian Clinton,47
#2,Joe Bloggs,22
#3,Linda Acme,45
```

Ensure you output only the staff roster. Do **not** include any other text, for
example, create headings for the output.

You must work within the structure of the code provided. You **cannot** change
the design of the `Employee` function or how it is used, but you may fix any
bugs you find withing the existing code and also add additional properties and
methods if required.

Good luck !!
