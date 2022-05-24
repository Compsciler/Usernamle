import random
from collections import Counter
from jsonfilelist import json_file_to_list, list_to_json_file

random.seed(0)  # random.seed(3) may be better for my purposes
random.seed(random.randrange(10**5))

old_word_list_json_file = 'constants/oldwordlist.json'
new_word_list_file = 'constants/wordlist.json'

def get_word_list(old_word_list):
    new_word_list = [word.lower().replace('-', '_') for word in old_word_list]
    return new_word_list

old_word_list = json_file_to_list(old_word_list_json_file)
new_word_list = get_word_list(old_word_list)
random.shuffle(new_word_list)
list_to_json_file(new_word_list, new_word_list_file)
