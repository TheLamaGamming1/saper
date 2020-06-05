function start() {
    var count;
    count = 10;
    random(count);
}
var tablica = new Array(100);

function random(count) {
    for (var i = 0; i < 100; i++) {
        tablica[i] = 0;
    }
    for (var i = 0; i < count; i++) {
        var random = Math.floor((Math.random() * 100) + 0);
        if (tablica[random] == 9) {
            i--;
        } else {
            tablica[random] = 9;
            if (random == 0) {
                if (tablica[random + 1] != 9) {
                    tablica[random + 1] += 1;
                }
                if (tablica[random + 10] != 9) {
                    tablica[random + 10] += 1;
                }
                if (tablica[random + 11] != 9) {
                    tablica[random + 11] += 1;
                }
            } else if (random == 9) {
                if (tablica[random - 1] != 9) {
                    tablica[random - 1] += 1;
                }
                if (tablica[random + 9] != 9) {
                    tablica[random + 9] += 1;
                }
                if (tablica[random + 10] != 9) {
                    tablica[random + 10] += 1;
                }
            } else if (random == 90) {
                if (tablica[random + 1] != 9) {
                    tablica[random + 1] += 1;
                }
                if (tablica[random - 9] != 9) {
                    tablica[random - 9] += 1;
                }
                if (tablica[random - 10] != 9) {
                    tablica[random - 10] += 1;
                }
            } else if (random == 99) {
                if (tablica[random - 1] != 9) {
                    tablica[random - 1] += 1;
                }
                if (tablica[random - 10] != 9) {
                    tablica[random - 10] += 1;
                }
                if (tablica[random - 11] != 9) {
                    tablica[random - 11] += 1;
                }
            } else if (random % 10 == 0 && random != 0 && random != 90) {
                if (tablica[random - 10] != 9) {
                    tablica[random - 10] += 1;
                }
                if (tablica[random - 9] != 9) {
                    tablica[random - 9] += 1;
                }
                if (tablica[random + 1] != 9) {
                    tablica[random + 1] += 1;
                }
                if (tablica[random + 10] != 9) {
                    tablica[random + 10] += 1;
                }
                if (tablica[random + 11] != 9) {
                    tablica[random + 11] += 1;
                }
            } else if (random % 10 == 9 && random != 9 && random != 99) {
                if (tablica[random - 10] != 9) {
                    tablica[random - 10] += 1;
                }
                if (tablica[random - 11] != 9) {
                    tablica[random - 11] += 1;
                }
                if (tablica[random - 1] != 9) {
                    tablica[random - 1] += 1;
                }
                if (tablica[random + 10] != 9) {
                    tablica[random + 10] += 1;
                }
                if (tablica[random + 9] != 9) {
                    tablica[random + 9] += 1;
                }
            } else if (random > 0 && random < 9) {
                if (tablica[random - 1] != 9) {
                    tablica[random - 1] += 1;
                }
                if (tablica[random + 9] != 9) {
                    tablica[random + 9] += 1;
                }
                if (tablica[random + 10] != 9) {
                    tablica[random + 10] += 1;
                }
                if (tablica[random + 11] != 9) {
                    tablica[random + 11] += 1;
                }
                if (tablica[random + 1] != 9) {
                    tablica[random + 1] += 1;
                }
            } else if (random > 90 && random < 99) {
                if (tablica[random - 1] != 9) {
                    tablica[random - 1] += 1;
                }
                if (tablica[random - 11] != 9) {
                    tablica[random - 11] += 1;
                }
                if (tablica[random - 10] != 9) {
                    tablica[random - 10] += 1;
                }
                if (tablica[random - 9] != 9) {
                    tablica[random - 9] += 1;
                }
                if (tablica[random + 1] != 9) {
                    tablica[random + 1] += 1;
                }
            } else {
                if (tablica[random - 1] != 9) {
                    tablica[random - 1] += 1;
                }
                if (tablica[random - 11] != 9) {
                    tablica[random - 11] += 1;
                }
                if (tablica[random - 10] != 9) {
                    tablica[random - 10] += 1;
                }
                if (tablica[random - 9] != 9) {
                    tablica[random - 9] += 1;
                }
                if (tablica[random + 1] != 9) {
                    tablica[random + 1] += 1;
                }
                if (tablica[random + 11] != 9) {
                    tablica[random + 11] += 1;
                }
                if (tablica[random + 10] != 9) {
                    tablica[random + 10] += 1;
                }
                if (tablica[random + 9] != 9) {
                    tablica[random + 9] += 1;
                }
            }
        }
    }
}

function klik(number) {
    document.getElementsByClassName("pole")[number].style.backgroundColor = "lime";
    if (tablica[number] == 0) {
        document.getElementsByClassName("pole")[number].innerHTML = '';
    } else {
        if (tablica[number] == 9) {
            document.getElementsByClassName("pole")[number].innerHTML = "<img src='bomb.png'>";
        }
        if (tablica[number] != 9) {
            document.getElementsByClassName("pole")[number].innerHTML = tablica[number];
        }
    }
}