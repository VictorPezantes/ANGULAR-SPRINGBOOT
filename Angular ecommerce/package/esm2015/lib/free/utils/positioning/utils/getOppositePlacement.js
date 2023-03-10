/**
 * Get the opposite placement of the given one
 */
export function getOppositePlacement(placement) {
    const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, matched => hash[matched]);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0T3Bwb3NpdGVQbGFjZW1lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy11aWtpdC1wcm8tc3RhbmRhcmQvIiwic291cmNlcyI6WyJsaWIvZnJlZS91dGlscy9wb3NpdGlvbmluZy91dGlscy9nZXRPcHBvc2l0ZVBsYWNlbWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FBQyxTQUFpQjtJQUNwRCxNQUFNLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsQ0FBQztJQUU1RSxPQUFPLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBRSxJQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUN4RixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBHZXQgdGhlIG9wcG9zaXRlIHBsYWNlbWVudCBvZiB0aGUgZ2l2ZW4gb25lXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcHBvc2l0ZVBsYWNlbWVudChwbGFjZW1lbnQ6IHN0cmluZykge1xuICBjb25zdCBoYXNoID0geyBsZWZ0OiAncmlnaHQnLCByaWdodDogJ2xlZnQnLCBib3R0b206ICd0b3AnLCB0b3A6ICdib3R0b20nIH07XG5cbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9sZWZ0fHJpZ2h0fGJvdHRvbXx0b3AvZywgbWF0Y2hlZCA9PiAoaGFzaCBhcyBhbnkpW21hdGNoZWRdKTtcbn1cbiJdfQ==