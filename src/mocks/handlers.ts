import { http, HttpResponse } from "msw";

export const handlers = [
    http.get('https://jsonplaceholder.typicode.com/users/1/todos', () => {
        console.log('✅ Mocking API call');
        return HttpResponse.json([
            { id: 1, title: 'Task 1', completed: false },
            { id: 2, title: 'Task 2', completed: true }
        ]);
    }),
    http.get('https://dummyjson.com/todos', () => {
        console.log('✅ Mocking API call');
        return HttpResponse.json(
            {
                "todos": [
                    {
                        "id": 1,
                        "todo": "Do something nice for someone you care about",
                        "completed": false,
                        "userId": 152
                    },
                    {
                        "id": 2,
                        "todo": "Memorize a poem",
                        "completed": true,
                        "userId": 13
                    }]
            }
        );
    }),
];
