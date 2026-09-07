
const challengeData = {
    title: "Matrix Rotate (90 Degrees Clockwise)",
    statement: "Given an n x n 2D matrix representing an image, rotate the image by 90 degrees clockwise.",
    analogy: `Memory logic layout:
i = 0 ⟶ 1
j = 1 ⟶ 0
Output configuration mapping:
i = 0 ⟶ 1, j = 0 ⟶ 1 (where n = 2)`,
    tests: [
        [[1, 2], [3, 4]],
        [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    ]
};

function rotate(matrix) {
    let row_len = matrix.length;
    let result = [];
    for (let i = 0; i < row_len; i++) {
        result[i] = [];
        let col_len = matrix[i].length - 1;
        for (let k = 0, j = col_len; j >= 0; j--, k++) {
            result[i][k] = matrix[j][i];
        }
    }
    return result;
}

function runChallenge(data, outputContainer) {
    data.tests.forEach((testCase, index) => {
        const solution = rotate(testCase);
        const card = document.createElement('div');
        card.className = 'result-card';
        card.innerHTML = `
            <strong>Test Case ${index + 1}:</strong>
            <br>Input: <div class="matrix-display">${JSON.stringify(testCase)}</div>
            <br>Rotated 90° Output: <div class="matrix-display" style="color: #16a34a;">${JSON.stringify(solution)}</div>
        `;
        outputContainer.appendChild(card);
    });
}