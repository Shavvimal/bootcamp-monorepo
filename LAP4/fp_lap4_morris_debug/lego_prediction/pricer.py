def predict(piece_count):
    count = int(piece_count)
    price = 10.99
    if count > 30:
        price+= count*0.3
    
    return round(price, 2)