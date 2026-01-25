import re

# Read the file
with open('src/app/verbs.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Verb definitions and their translations
verb_translations = {
    'bajar': {
        'present': {'yo': 'I go down', 'tu': 'you go down', 'elEllaUsted': 'he/she goes down', 'nosotros': 'we go down', 'vosotros': 'you all go down', 'ellosEllasUstedes': 'they go down'},
        'preterite': {'yo': 'I went down', 'tu': 'you went down', 'elEllaUsted': 'he/she went down', 'nosotros': 'we went down', 'vosotros': 'you all went down', 'ellosEllasUstedes': 'they went down'},
        'imperfect': {'yo': 'I used to go down', 'tu': 'you used to go down', 'elEllaUsted': 'he/she used to go down', 'nosotros': 'we used to go down', 'vosotros': 'you all used to go down', 'ellosEllasUstedes': 'they used to go down'}
    },
    'acostarse': {
        'present': {'yo': 'I go to bed', 'tu': 'you go to bed', 'elEllaUsted': 'he/she goes to bed', 'nosotros': 'we go to bed', 'vosotros': 'you all go to bed', 'ellosEllasUstedes': 'they go to bed'},
        'preterite': {'yo': 'I went to bed', 'tu': 'you went to bed', 'elEllaUsted': 'he/she went to bed', 'nosotros': 'we went to bed', 'vosotros': 'you all went to bed', 'ellosEllasUstedes': 'they went to bed'},
        'imperfect': {'yo': 'I used to go to bed', 'tu': 'you used to go to bed', 'elEllaUsted': 'he/she used to go to bed', 'nosotros': 'we used to go to bed', 'vosotros': 'you all used to go to bed', 'ellosEllasUstedes': 'they used to go to bed'}
    },
    'aprender': {
        'present': {'yo': 'I learn', 'tu': 'you learn', 'elEllaUsted': 'he/she learns', 'nosotros': 'we learn', 'vosotros': 'you all learn', 'ellosEllasUstedes': 'they learn'},
        'preterite': {'yo': 'I learned', 'tu': 'you learned', 'elEllaUsted': 'he/she learned', 'nosotros': 'we learned', 'vosotros': 'you all learned', 'ellosEllasUstedes': 'they learned'},
        'imperfect': {'yo': 'I used to learn', 'tu': 'you used to learn', 'elEllaUsted': 'he/she used to learn', 'nosotros': 'we used to learn', 'vosotros': 'you all used to learn', 'ellosEllasUstedes': 'they used to learn'}
    },
    'buscar': {
        'present': {'yo': 'I look for', 'tu': 'you look for', 'elEllaUsted': 'he/she looks for', 'nosotros': 'we look for', 'vosotros': 'you all look for', 'ellosEllasUstedes': 'they look for'},
        'preterite': {'yo': 'I looked for', 'tu': 'you looked for', 'elEllaUsted': 'he/she looked for', 'nosotros': 'we looked for', 'vosotros': 'you all looked for', 'ellosEllasUstedes': 'they looked for'},
        'imperfect': {'yo': 'I used to look for', 'tu': 'you used to look for', 'elEllaUsted': 'he/she used to look for', 'nosotros': 'we used to look for', 'vosotros': 'you all used to look for', 'ellosEllasUstedes': 'they used to look for'}
    },
    'comer': {
        'present': {'yo': 'I eat', 'tu': 'you eat', 'elEllaUsted': 'he/she eats', 'nosotros': 'we eat', 'vosotros': 'you all eat', 'ellosEllasUstedes': 'they eat'},
        'preterite': {'yo': 'I ate', 'tu': 'you ate', 'elEllaUsted': 'he/she ate', 'nosotros': 'we ate', 'vosotros': 'you all ate', 'ellosEllasUstedes': 'they ate'},
        'imperfect': {'yo': 'I used to eat', 'tu': 'you used to eat', 'elEllaUsted': 'he/she used to eat', 'nosotros': 'we used to eat', 'vosotros': 'you all used to eat', 'ellosEllasUstedes': 'they used to eat'}
    },
    'comprar': {
        'present': {'yo': 'I buy', 'tu': 'you buy', 'elEllaUsted': 'he/she buys', 'nosotros': 'we buy', 'vosotros': 'you all buy', 'ellosEllasUstedes': 'they buy'},
        'preterite': {'yo': 'I bought', 'tu': 'you bought', 'elEllaUsted': 'he/she bought', 'nosotros': 'we bought', 'vosotros': 'you all bought', 'ellosEllasUstedes': 'they bought'},
        'imperfect': {'yo': 'I used to buy', 'tu': 'you used to buy', 'elEllaUsted': 'he/she used to buy', 'nosotros': 'we used to buy', 'vosotros': 'you all used to buy', 'ellosEllasUstedes': 'they used to buy'}
    },
    'correr': {
        'present': {'yo': 'I run', 'tu': 'you run', 'elEllaUsted': 'he/she runs', 'nosotros': 'we run', 'vosotros': 'you all run', 'ellosEllasUstedes': 'they run'},
        'preterite': {'yo': 'I ran', 'tu': 'you ran', 'elEllaUsted': 'he/she ran', 'nosotros': 'we ran', 'vosotros': 'you all ran', 'ellosEllasUstedes': 'they ran'},
        'imperfect': {'yo': 'I used to run', 'tu': 'you used to run', 'elEllaUsted': 'he/she used to run', 'nosotros': 'we used to run', 'vosotros': 'you all used to run', 'ellosEllasUstedes': 'they used to run'}
    },
    'dar': {
        'present': {'yo': 'I give', 'tu': 'you give', 'elEllaUsted': 'he/she gives', 'nosotros': 'we give', 'vosotros': 'you all give', 'ellosEllasUstedes': 'they give'},
        'preterite': {'yo': 'I gave', 'tu': 'you gave', 'elEllaUsted': 'he/she gave', 'nosotros': 'we gave', 'vosotros': 'you all gave', 'ellosEllasUstedes': 'they gave'},
        'imperfect': {'yo': 'I used to give', 'tu': 'you used to give', 'elEllaUsted': 'he/she used to give', 'nosotros': 'we used to give', 'vosotros': 'you all used to give', 'ellosEllasUstedes': 'they used to give'}
    },
    'decir': {
        'present': {'yo': 'I say', 'tu': 'you say', 'elEllaUsted': 'he/she says', 'nosotros': 'we say', 'vosotros': 'you all say', 'ellosEllasUstedes': 'they say'},
        'preterite': {'yo': 'I said', 'tu': 'you said', 'elEllaUsted': 'he/she said', 'nosotros': 'we said', 'vosotros': 'you all said', 'ellosEllasUstedes': 'they said'},
        'imperfect': {'yo': 'I used to say', 'tu': 'you used to say', 'elEllaUsted': 'he/she used to say', 'nosotros': 'we used to say', 'vosotros': 'you all used to say', 'ellosEllasUstedes': 'they used to say'}
    },
    'dormir': {
        'present': {'yo': 'I sleep', 'tu': 'you sleep', 'elEllaUsted': 'he/she sleeps', 'nosotros': 'we sleep', 'vosotros': 'you all sleep', 'ellosEllasUstedes': 'they sleep'},
        'preterite': {'yo': 'I slept', 'tu': 'you slept', 'elEllaUsted': 'he/she slept', 'nosotros': 'we slept', 'vosotros': 'you all slept', 'ellosEllasUstedes': 'they slept'},
        'imperfect': {'yo': 'I used to sleep', 'tu': 'you used to sleep', 'elEllaUsted': 'he/she used to sleep', 'nosotros': 'we used to sleep', 'vosotros': 'you all used to sleep', 'ellosEllasUstedes': 'they used to sleep'}
    },
    'empezar': {
        'present': {'yo': 'I begin', 'tu': 'you begin', 'elEllaUsted': 'he/she begins', 'nosotros': 'we begin', 'vosotros': 'you all begin', 'ellosEllasUstedes': 'they begin'},
        'preterite': {'yo': 'I began', 'tu': 'you began', 'elEllaUsted': 'he/she began', 'nosotros': 'we began', 'vosotros': 'you all began', 'ellosEllasUstedes': 'they began'},
        'imperfect': {'yo': 'I used to begin', 'tu': 'you used to begin', 'elEllaUsted': 'he/she used to begin', 'nosotros': 'we used to begin', 'vosotros': 'you all used to begin', 'ellosEllasUstedes': 'they used to begin'}
    },
    'encontrar': {
        'present': {'yo': 'I find', 'tu': 'you find', 'elEllaUsted': 'he/she finds', 'nosotros': 'we find', 'vosotros': 'you all find', 'ellosEllasUstedes': 'they find'},
        'preterite': {'yo': 'I found', 'tu': 'you found', 'elEllaUsted': 'he/she found', 'nosotros': 'we found', 'vosotros': 'you all found', 'ellosEllasUstedes': 'they found'},
        'imperfect': {'yo': 'I used to find', 'tu': 'you used to find', 'elEllaUsted': 'he/she used to find', 'nosotros': 'we used to find', 'vosotros': 'you all used to find', 'ellosEllasUstedes': 'they used to find'}
    },
    'escribir': {
        'present': {'yo': 'I write', 'tu': 'you write', 'elEllaUsted': 'he/she writes', 'nosotros': 'we write', 'vosotros': 'you all write', 'ellosEllasUstedes': 'they write'},
        'preterite': {'yo': 'I wrote', 'tu': 'you wrote', 'elEllaUsted': 'he/she wrote', 'nosotros': 'we wrote', 'vosotros': 'you all wrote', 'ellosEllasUstedes': 'they wrote'},
        'imperfect': {'yo': 'I used to write', 'tu': 'you used to write', 'elEllaUsted': 'he/she used to write', 'nosotros': 'we used to write', 'vosotros': 'you all used to write', 'ellosEllasUstedes': 'they used to write'}
    },
    'estar': {
        'present': {'yo': 'I am', 'tu': 'you are', 'elEllaUsted': 'he/she is', 'nosotros': 'we are', 'vosotros': 'you all are', 'ellosEllasUstedes': 'they are'},
        'preterite': {'yo': 'I was', 'tu': 'you were', 'elEllaUsted': 'he/she was', 'nosotros': 'we were', 'vosotros': 'you all were', 'ellosEllasUstedes': 'they were'},
        'imperfect': {'yo': 'I used to be', 'tu': 'you used to be', 'elEllaUsted': 'he/she used to be', 'nosotros': 'we used to be', 'vosotros': 'you all used to be', 'ellosEllasUstedes': 'they used to be'}
    },
    'hablar': {
        'present': {'yo': 'I speak', 'tu': 'you speak', 'elEllaUsted': 'he/she speaks', 'nosotros': 'we speak', 'vosotros': 'you all speak', 'ellosEllasUstedes': 'they speak'},
        'preterite': {'yo': 'I spoke', 'tu': 'you spoke', 'elEllaUsted': 'he/she spoke', 'nosotros': 'we spoke', 'vosotros': 'you all spoke', 'ellosEllasUstedes': 'they spoke'},
        'imperfect': {'yo': 'I used to speak', 'tu': 'you used to speak', 'elEllaUsted': 'he/she used to speak', 'nosotros': 'we used to speak', 'vosotros': 'you all used to speak', 'ellosEllasUstedes': 'they used to speak'}
    },
    'hacer': {
        'present': {'yo': 'I do/make', 'tu': 'you do/make', 'elEllaUsted': 'he/she does/makes', 'nosotros': 'we do/make', 'vosotros': 'you all do/make', 'ellosEllasUstedes': 'they do/make'},
        'preterite': {'yo': 'I did/made', 'tu': 'you did/made', 'elEllaUsted': 'he/she did/made', 'nosotros': 'we did/made', 'vosotros': 'you all did/made', 'ellosEllasUstedes': 'they did/made'},
        'imperfect': {'yo': 'I used to do/make', 'tu': 'you used to do/make', 'elEllaUsted': 'he/she used to do/make', 'nosotros': 'we used to do/make', 'vosotros': 'you all used to do/make', 'ellosEllasUstedes': 'they used to do/make'}
    },
    'ir': {
        'present': {'yo': 'I go', 'tu': 'you go', 'elEllaUsted': 'he/she goes', 'nosotros': 'we go', 'vosotros': 'you all go', 'ellosEllasUstedes': 'they go'},
        'preterite': {'yo': 'I went', 'tu': 'you went', 'elEllaUsted': 'he/she went', 'nosotros': 'we went', 'vosotros': 'you all went', 'ellosEllasUstedes': 'they went'},
        'imperfect': {'yo': 'I used to go', 'tu': 'you used to go', 'elEllaUsted': 'he/she used to go', 'nosotros': 'we used to go', 'vosotros': 'you all used to go', 'ellosEllasUstedes': 'they used to go'}
    },
    'invitar': {
        'present': {'yo': 'I invite', 'tu': 'you invite', 'elEllaUsted': 'he/she invites', 'nosotros': 'we invite', 'vosotros': 'you all invite', 'ellosEllasUstedes': 'they invite'},
        'preterite': {'yo': 'I invited', 'tu': 'you invited', 'elEllaUsted': 'he/she invited', 'nosotros': 'we invited', 'vosotros': 'you all invited', 'ellosEllasUstedes': 'they invited'},
        'imperfect': {'yo': 'I used to invite', 'tu': 'you used to invite', 'elEllaUsted': 'he/she used to invite', 'nosotros': 'we used to invite', 'vosotros': 'you all used to invite', 'ellosEllasUstedes': 'they used to invite'}
    },
    'pagar': {
        'present': {'yo': 'I pay', 'tu': 'you pay', 'elEllaUsted': 'he/she pays', 'nosotros': 'we pay', 'vosotros': 'you all pay', 'ellosEllasUstedes': 'they pay'},
        'preterite': {'yo': 'I paid', 'tu': 'you paid', 'elEllaUsted': 'he/she paid', 'nosotros': 'we paid', 'vosotros': 'you all paid', 'ellosEllasUstedes': 'they paid'},
        'imperfect': {'yo': 'I used to pay', 'tu': 'you used to pay', 'elEllaUsted': 'he/she used to pay', 'nosotros': 'we used to pay', 'vosotros': 'you all used to pay', 'ellosEllasUstedes': 'they used to pay'}
    },
    'pedir': {
        'present': {'yo': 'I ask for', 'tu': 'you ask for', 'elEllaUsted': 'he/she asks for', 'nosotros': 'we ask for', 'vosotros': 'you all ask for', 'ellosEllasUstedes': 'they ask for'},
        'preterite': {'yo': 'I asked for', 'tu': 'you asked for', 'elEllaUsted': 'he/she asked for', 'nosotros': 'we asked for', 'vosotros': 'you all asked for', 'ellosEllasUstedes': 'they asked for'},
        'imperfect': {'yo': 'I used to ask for', 'tu': 'you used to ask for', 'elEllaUsted': 'he/she used to ask for', 'nosotros': 'we used to ask for', 'vosotros': 'you all used to ask for', 'ellosEllasUstedes': 'they used to ask for'}
    },
    'preferir': {
        'present': {'yo': 'I prefer', 'tu': 'you prefer', 'elEllaUsted': 'he/she prefers', 'nosotros': 'we prefer', 'vosotros': 'you all prefer', 'ellosEllasUstedes': 'they prefer'},
        'preterite': {'yo': 'I preferred', 'tu': 'you preferred', 'elEllaUsted': 'he/she preferred', 'nosotros': 'we preferred', 'vosotros': 'you all preferred', 'ellosEllasUstedes': 'they preferred'},
        'imperfect': {'yo': 'I used to prefer', 'tu': 'you used to prefer', 'elEllaUsted': 'he/she used to prefer', 'nosotros': 'we used to prefer', 'vosotros': 'you all used to prefer', 'ellosEllasUstedes': 'they used to prefer'}
    },
    'ser': {
        'present': {'yo': 'I am', 'tu': 'you are', 'elEllaUsted': 'he/she is', 'nosotros': 'we are', 'vosotros': 'you all are', 'ellosEllasUstedes': 'they are'},
        'preterite': {'yo': 'I was', 'tu': 'you were', 'elEllaUsted': 'he/she was', 'nosotros': 'we were', 'vosotros': 'you all were', 'ellosEllasUstedes': 'they were'},
        'imperfect': {'yo': 'I used to be', 'tu': 'you used to be', 'elEllaUsted': 'he/she used to be', 'nosotros': 'we used to be', 'vosotros': 'you all used to be', 'ellosEllasUstedes': 'they used to be'}
    },
    'tener': {
        'present': {'yo': 'I have', 'tu': 'you have', 'elEllaUsted': 'he/she has', 'nosotros': 'we have', 'vosotros': 'you all have', 'ellosEllasUstedes': 'they have'},
        'preterite': {'yo': 'I had', 'tu': 'you had', 'elEllaUsted': 'he/she had', 'nosotros': 'we had', 'vosotros': 'you all had', 'ellosEllasUstedes': 'they had'},
        'imperfect': {'yo': 'I used to have', 'tu': 'you used to have', 'elEllaUsted': 'he/she used to have', 'nosotros': 'we used to have', 'vosotros': 'you all used to have', 'ellosEllasUstedes': 'they used to have'}
    },
    'ver': {
        'present': {'yo': 'I see', 'tu': 'you see', 'elEllaUsted': 'he/she sees', 'nosotros': 'we see', 'vosotros': 'you all see', 'ellosEllasUstedes': 'they see'},
        'preterite': {'yo': 'I saw', 'tu': 'you saw', 'elEllaUsted': 'he/she saw', 'nosotros': 'we saw', 'vosotros': 'you all saw', 'ellosEllasUstedes': 'they saw'},
        'imperfect': {'yo': 'I used to see', 'tu': 'you used to see', 'elEllaUsted': 'he/she used to see', 'nosotros': 'we used to see', 'vosotros': 'you all used to see', 'ellosEllasUstedes': 'they used to see'}
    },
    'visitar': {
        'present': {'yo': 'I visit', 'tu': 'you visit', 'elEllaUsted': 'he/she visits', 'nosotros': 'we visit', 'vosotros': 'you all visit', 'ellosEllasUstedes': 'they visit'},
        'preterite': {'yo': 'I visited', 'tu': 'you visited', 'elEllaUsted': 'he/she visited', 'nosotros': 'we visited', 'vosotros': 'you all visited', 'ellosEllasUstedes': 'they visited'},
        'imperfect': {'yo': 'I used to visit', 'tu': 'you used to visit', 'elEllaUsted': 'he/she used to visit', 'nosotros': 'we used to visit', 'vosotros': 'you all used to visit', 'ellosEllasUstedes': 'they used to visit'}
    },
    'vivir': {
        'present': {'yo': 'I live', 'tu': 'you live', 'elEllaUsted': 'he/she lives', 'nosotros': 'we live', 'vosotros': 'you all live', 'ellosEllasUstedes': 'they live'},
        'preterite': {'yo': 'I lived', 'tu': 'you lived', 'elEllaUsted': 'he/she lived', 'nosotros': 'we lived', 'vosotros': 'you all lived', 'ellosEllasUstedes': 'they lived'},
        'imperfect': {'yo': 'I used to live', 'tu': 'you used to live', 'elEllaUsted': 'he/she used to live', 'nosotros': 'we used to live', 'vosotros': 'you all used to live', 'ellosEllasUstedes': 'they used to live'}
    }
}

# Split the content by infinitive to get each verb section
verb_sections = re.split(r"(infinitive: '[a-z]+',)", content)

# Process each verb section
new_content_parts = [verb_sections[0]]  # First part before any verbs

for i in range(1, len(verb_sections), 2):
    if i + 1 < len(verb_sections):
        infinitive_line = verb_sections[i]
        verb_body = verb_sections[i + 1]
        
        # Extract the verb name
        match = re.search(r"infinitive: '([a-z]+)'", infinitive_line)
        if match:
            verb_name = match.group(1)
            
            if verb_name in verb_translations:
                translations = verb_translations[verb_name]
                
                # For each tense and pronoun, add the englishTranslation
                for tense in ['present', 'preterite', 'imperfect']:
                    for pronoun in ['yo', 'tu', 'elEllaUsted', 'nosotros', 'vosotros', 'ellosEllasUstedes']:
                        translation = translations[tense][pronoun]
                        
                        # Pattern: pronoun: { conjugated: 'xxx', sampleSentence
                        # Replace with: pronoun: { conjugated: 'xxx', englishTranslation: 'yyy', sampleSentence
                        pattern = f"({pronoun}: {{\\s*conjugated: '[^']+',)\\s*(sampleSentence:)"
                        replacement = f"\\1 englishTranslation: '{translation}', \\2"
                        
                        verb_body = re.sub(pattern, replacement, verb_body, count=1)
        
        new_content_parts.append(infinitive_line)
        new_content_parts.append(verb_body)

# Join all parts
new_content = ''.join(new_content_parts)

# Write back
with open('src/app/verbs.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added all englishTranslation properties!")
