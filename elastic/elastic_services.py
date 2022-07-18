import random

from backend.recipes.constants import client, RECIPES_INDEX, MAPPINGS, SETTINGS
from backend.recipes.services import put_doc_in_index, update_doc_after_like, get_top_recipes, data_processing, \
    min_processing, get_recipe_by_id

PHOTO = [
    "http://127.0.0.1:8000/media/steps/big-hamburger-with-double-beef-french-fries_252907-8_r0xDrXE.webp",
    "http://127.0.0.1:8000/media/steps/big-hamburger-with-double-beef-french-fries_252907-8.webp",
    "http://127.0.0.1:8000/media/steps/hot-shakshuka-819x1024_XB5RyKe.webp",
    "http://127.0.0.1:8000/media/steps/index_gq1w9DC.jpeg",
    "http://127.0.0.1:8000/media/steps/kk_V7sbfXg.jpeg",
    "http://127.0.0.1:8000/media/steps/healthy-food-clean-eating-selection-260nw-722718097_jk16D16.webp",
    "http://127.0.0.1:8000/media/steps/images_mQ7gUHa.jpeg",
    "http://127.0.0.1:8000/media/steps/illustration-of-different-plates-of-food_xKtm7wy.jpg",
    "http://127.0.0.1:8000/media/steps/food_lLTqrTz.jpeg",
]
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
FAVORITE = ["Oscar", "Urbane", "Wolfgang", "Tanner", "Karter", "Finnian", "Anderson", "Clark", "Frederick", "Umar",
            "Korbin", "Brycen", "Colby", "Xiomar", "Kieran", "Wayne", "Leon", "Nelson", "Yoel", "Duke", "Irvin", "Rhys",
            "Uriel", "Roland", "Quigley", "Belen", "Kaydence", "Queena", "Grace", "Vera", "Taya", "Josie", "Farah",
            "Waneeta", "Daisy", "Lila", "Leah", "Julianna", "Farah", "Megan", "Rivka", "Winona", "Belle", "Rosalyn",
            "Emma", "Zofia", "Hanna", "Urina", "Orilla", "Wilmina"]
STEP_PHOTO = [
    "http://127.0.0.1:8000/media/steps/big-hamburger-with-double-beef-french-fries_252907-8_r0xDrXE.webp",
    "http://127.0.0.1:8000/media/steps/big-hamburger-with-double-beef-french-fries_252907-8.webp",
    "http://127.0.0.1:8000/media/steps/hot-shakshuka-819x1024_XB5RyKe.webp",
    "http://127.0.0.1:8000/media/steps/index_gq1w9DC.jpeg",
    "http://127.0.0.1:8000/media/steps/kk_V7sbfXg.jpeg",
    "http://127.0.0.1:8000/media/steps/healthy-food-clean-eating-selection-260nw-722718097_jk16D16.webp",
    "http://127.0.0.1:8000/media/steps/images_mQ7gUHa.jpeg",
    "http://127.0.0.1:8000/media/steps/illustration-of-different-plates-of-food_xKtm7wy.jpg",
    "http://127.0.0.1:8000/media/steps/food_lLTqrTz.jpeg",
]


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
        random_number_for_steps = random.randint(1, len(STEPS) + 1)
        _photo = random.choice(PHOTO)
        _name = random.choice(NAMES)
        _description = random.choice(DESCRIPTIONS)
        _categories = list(set(random.choices(CATEGORIES, k=random.randint(1, len(CATEGORIES) + 1))))
        _steps = []
        for j in range(0, random_number_for_steps):
            _steps.append([random.choice(STEPS), random.choice(STEP_PHOTO)])
        _author = random.choice(AUTHOR)
        _likes = list(set(random.choices(LIKES, k=random.randint(0, len(LIKES) + 1))))
        _count_likes = len(_likes)
        _favorite = list(set(random.choices(FAVORITE, k=random.randint(0, len(FAVORITE) + 1))))

        _id = \
            put_doc_in_index(photo=_photo, name=_name, description=_description, categories=_categories, steps=_steps,
                             author=_author,
                             likes=_likes, count_likes=_count_likes, favorite=_favorite)['_id']

        print(f"=== Was created {i + 1} recipe with id: {_id} ===")


if __name__ == "__main__":
    if create_index(RECIPES_INDEX):
        print("=== Index is exist ===")
    else:
        print("=== Were some problems with index ===")

    # This function will create {count} recipes
    # create_random_recipes(30)

    # This function will delete {index} index
    # delete_index(RECIPES_INDEX)

    # This function will update the document by ID: count_likes +1 and likes.append(username)
    # update_doc_after_like(id="", username="")

    # get_top_recipes()

    result = get_recipe_by_id(id="x9GT3YEBUj24i5tQeq22")
    print(result)

    print("=== Done ===")
