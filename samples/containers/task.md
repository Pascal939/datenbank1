### Anpassung der Containeraufgabe

Erstelle einen Algorithmus um Container zu sortieren.

Alle Container sind in einem mehrdimensionalem Array angegeben.

```
let containers = [
 [{id:1, w: 80},{id:5, w: 70},{id:9, w: 90}],
 [{id:7, w: 10},{id:6, w: 30},{id:8, w: 20}],
 [{id:4, w: 40},{id:3, w: 50},{id:2, w: 60}],
]
```

##### Aufgabe 1: 

Sortiere die Container im Array `containers` so,
dass ein neues mehrdimensionales Array entsteht und dort
die Container ordnungsgemaß, aufsteigend sortiert sind.

Bitte verwendet Schleifen zur Lösung dieser Aufgabe.

##### Aufgabe 2:

Sortiere das Array so, dass am Ende 3 Arrays mit den jeweiligen ordnungsgemaß sortierten Containern zu finden sind

Bezeichne die Arrays wie folgt: `one` `two` `three`

##### Aufgabe 3:

Stelle dir das Spiel `Türme von Hanoi` vor.

![https://shorturl.at/7EBUi](https://shorturl.at/7EBUi)


Das zu verwendende Array hat diesen Aufbau

```
let towers = [
 [{w: 1}, null, null],
 [{w: 2}, null, null],
 [{w: 3}, null, null],
]
```

Alle Elemente des Turms befinden sich in Zeile 0 (links), 
Ziel ist es, dass der Turm in Zeile 1 (mitte) neu aufgebaut wird. 

```
let towers = [
 [null, {w: 1}, null],
 [null, {w: 2}, null],
 [null, {w: 3}, null],
]
```


##### Aufgabe 4:

Versuche diese Erkenntnisse auf die ursprüngliche Containeraufgabe anzuwenden.