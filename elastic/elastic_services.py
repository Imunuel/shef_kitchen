import random

from backend.recipes.constants import client, RECIPES_INDEX, MAPPINGS, SETTINGS
from backend.recipes.services import put_doc_in_index

NAMES = ["Delicious puffs", "Carbonara with chicken", "Pizza dough on kefir", "Tender cottage cheese cake",
         "Buckwheat noodles with chicken teriyaki", "French meat with mushrooms", "Pork heart",
         "Chicken drumstick in the oven", "Delicious aspic pizza in the oven", "Lean borscht with beans",
         "Kharcho soup", "Lamb stew with vegetables", "Banana jam", "Pasta with stewed meat", "Slivyanka",
         "Pink salmon soup with cream", "Mini puff pastry pizza", "Lobio beans", "Rabbit in the oven"]
DESCRIPTIONS = ["Delicious, juicy meat. Vegetables melt in your mouth, complementing meat",
                "Teriyaki sauce perfectly complements chicken, and buckwheat noodles are great for everyone who is tired of ordinary noodles",
                "Excellent, juicy meat supplemented with mushrooms", "Sweetness that complements your life",
                "Juicy chicken for you and your family", "Recipe a dough that fits many recipes",
                "Cottage cheese sweetness for your family", "Soft pork heart for all lovers of entrails",
                "Juicy chicken on a bone", "Soup that will complement your everyday life",
                "This soup is eaten during fasts",
                "Creamy dish, fills your mouth with soft, creamy taste. Thanks to the cream, the dish has a thick gravy"]
CATEGORIES = ["Vegetables", "Dairy", "Lean", "Breakfast", "Lunch", "Dinner", "Afternoon Snack", "Seafood", "Snacks",
              "Soup", "Meat", "Oven", "Frying Pan", "Dessert", "Drink", "Alcohol", "Cold", "Salad"]
STEPS = ["Wash and cut vegetables into small cubes. Cut the meat into pieces, if desired, ",
         "In a frying pan with heated oil, put the meat and fry until golden brown. Transfer the cooked meat to a plate",
         "Put the vegetables in a frying pan and fry until golden",
         "Add the meat to the vegetables and fry together for five minutes",
         "Add salt and pepper to taste and pour everything with broth or water so that the meat is covered with half a centimeter of liquid",
         "Simmer the meat for forty minutes, looking every ten or twenty minutes",
         "After an hour of cooking, get the meat and wrap it in foil. Let the meat rest for fifteen minutes",
         "Mix all the vegetables in a saucepan and cook for twenty minutes",
         "Add beans to the vegetables and simmer all together for another twenty minutes",
         "Decorate the dish with herbs if desired"]
AUTHOR = ["Oscar", "Urbane", "Wolfgang", "Tanner", "Karter", "Finnian", "Anderson", "Clark", "Frederick", "Umar",
          "Korbin", "Brycen", "Colby", "Xiomar", "Kieran", "Wayne", "Leon", "Nelson", "Yoel", "Duke", "Irvin", "Rhys",
          "Uriel", "Roland", "Quigley", "Belen", "Kaydence", "Queena", "Grace", "Vera", "Taya", "Josie", "Farah",
          "Waneeta", "Daisy", "Lila", "Leah", "Julianna", "Farah", "Megan", "Rivka", "Winona", "Belle", "Rosalyn",
          "Emma", "Zofia", "Hanna", "Urina", "Orilla", "Wilmina"]
LIKES = ["Oscar", "Urbane", "Wolfgang", "Tanner", "Karter", "Finnian", "Anderson", "Clark", "Frederick", "Umar",
         "Korbin", "Brycen", "Colby", "Xiomar", "Kieran", "Wayne", "Leon", "Nelson", "Yoel", "Duke", "Irvin", "Rhys",
         "Uriel", "Roland", "Quigley", "Belen", "Kaydence", "Queena", "Grace", "Vera", "Taya", "Josie", "Farah",
         "Waneeta", "Daisy", "Lila", "Leah", "Julianna", "Farah", "Megan", "Rivka", "Winona", "Belle", "Rosalyn",
         "Emma", "Zofia", "Hanna", "Urina", "Orilla", "Wilmina"]


def create_index(index: str):
    """
    returned data after creation index:
    {'acknowledged': True, 'shards_acknowledged': True, 'index': 'name_index'}
    """
    if client.indices.exists(index=index):
        return True
    return client.indices.create(index=index, mappings=MAPPINGS, settings=SETTINGS)["acknowledged"]


def delete_index(index: str):
    client.indices.delete(index=index)
    return True


def create_random_recipes(count_of_recipes: int):
    for i in range(0, count_of_recipes):
        _name = random.choice(NAMES)
        _description = random.choice(DESCRIPTIONS)
        _categories = list(set(random.choices(CATEGORIES, k=random.randint(1, len(CATEGORIES) + 1))))
        _steps = list(set(random.choices(STEPS, k=random.randint(1, len(STEPS) + 1))))
        _author = random.choice(AUTHOR)
        _likes = list(set(random.choices(LIKES, k=random.randint(0, len(LIKES) + 1))))

        _id = \
            put_doc_in_index(name=_name, description=_description, categories=_categories, steps=_steps, author=_author,
                             likes=_likes)['_id']

        print(f"=== Was created {i + 1} recipe with id: {_id} ===")


if __name__ == "__main__":
    if create_index(RECIPES_INDEX):
        print("=== Index is exist ===")
    else:
        print("=== Were some problems with index ===")

    # This function will create {count} recipes
    create_random_recipes(20)

    # This function will delete {index} index
    # delete_index(RECIPES_INDEX)

    print("=== Done ===")
